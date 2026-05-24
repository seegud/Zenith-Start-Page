const CACHE_NAME = 'zenith-start-page-v3';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.js',
  '/src/style.css',
  'https://img.icons8.com/?size=100&id=c9xXfpS6QWwx&format=png&color=000000'
];

const API_CACHE_TTL = 30 * 60 * 1000;

// Install event: opens a cache and adds the core assets to it.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch event: serves assets from cache or network.
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // For API calls, use a network-first strategy with TTL check.
  if (url.hostname === 'wttr.in' || url.hostname === 'corsproxy.io') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request).then(cachedResponse => {
          // Check if cached response is still valid
          if (cachedResponse) {
            const cachedDate = cachedResponse.headers.get('sw-cached-date');
            if (cachedDate && (Date.now() - parseInt(cachedDate)) < API_CACHE_TTL) {
              return cachedResponse;
            }
          }

          // Network first
          return fetch(request)
            .then(response => {
              const responseToCache = response.clone();
              const headers = new Headers(responseToCache.headers);
              headers.set('sw-cached-date', Date.now().toString());
              const datedResponse = new Response(responseToCache.body, {
                status: responseToCache.status,
                statusText: responseToCache.statusText,
                headers: headers,
              });
              cache.put(request, datedResponse);
              return response;
            })
            .catch(() => {
              // If network fails, try to serve from cache regardless of TTL
              return cachedResponse || new Response('Offline', { status: 503 });
            });
        })
      )
    );
  } else {
    // For all other requests, use a cache-first strategy.
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request).then(
            networkResponse => {
              if (!networkResponse || networkResponse.status !== 200 || (networkResponse.type !== 'basic' && !networkResponse.type.includes('cors'))) {
                return networkResponse;
              }

              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(request, responseToCache);
                });

              return networkResponse;
            }
          );
        })
    );
  }
});

// Message listener for skip waiting
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Activate event: cleans up old caches and claims clients.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
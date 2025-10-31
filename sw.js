const CACHE_NAME = 'zenith-start-page-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0/',
  'https://img.icons8.com/?size=100&id=c9xXfpS6QWwx&format=png&color=000000'
];

// Install event: opens a cache and adds the core assets to it.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Fetch event: serves assets from cache or network.
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // For API calls (weather, bing wallpaper), use a network-first strategy.
  if (url.hostname === 'wttr.in' || url.hostname === 'corsproxy.io') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // If the network request is successful, clone it and cache it.
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(request, responseToCache);
            });
          return response;
        })
        .catch(() => {
          // If the network fails, try to serve from the cache.
          return caches.match(request);
        })
    );
  } else {
    // For all other requests, use a cache-first strategy.
    event.respondWith(
      caches.match(request)
        .then(response => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          // Not in cache - fetch from network, then cache the new resource.
          return fetch(request).then(
            networkResponse => {
              // Check if we received a valid response
              if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && !networkResponse.type.includes('cors')) {
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

// Activate event: cleans up old caches.
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
    })
  );
});

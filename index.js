
// =================================================================================
// ICONS
// =================================================================================
const Icons = {
    Sun: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${c}"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a6 6 0 100 12 6 6 0 000-12z" /></svg>`,
    Moon: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${c}"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75 2.572 0 4.92-.99 6.752-2.648z" /></svg>`,
    Upload: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${c}"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>`,
    Bing: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" class="${c}"><defs><linearGradient id="bing-gradient" x1="5.32" y1="21.43" x2="22.21" y2="8.36" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0078d4"/><stop offset="1" stop-color="#48a5ff"/></linearGradient></defs><path fill="url(#bing-gradient)" d="M12.83,3.033A8.42,8.42,0,0,0,5.068,8.219L3.935,6.011a.47.47,0,0,0-.84.42L5.13,11.02a.47.47,0,0,0,.637-.15L9.6,5.323a.47.47,0,0,0-.83-.43L7.72,6.7A6.55,6.55,0,0,1,19.03,11.8a.47.47,0,0,0,.9-.2V11.5A8.42,8.42,0,0,0,12.83,3.033Z"/><path fill="url(#bing-gradient)" d="M19.07,12.2a6.55,6.55,0,0,1-13.3,2.82l-1.1,1.9a.47.47,0,0,0,.41.71h0l4.7-.28a.47.47,0,0,0,.36-.5L6.2,12.65a.47.47,0,0,0-.86-.33L4.03,14.6a8.42,8.42,0,0,0,15.04-5.26V9.24a.47.47,0,0,0-.94,0Z"/></svg>`,
    Search: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${c}"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>`,
    Google: (c = "w-6 h-6") => `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="${c}"><title>Google</title><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`,
    Settings: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${c}"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.127c-.331.183-.581.495-.645.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.995s-.145-.755-.437-.995l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124.072-.044.146-.087.22-.127.332-.183.582-.495.645-.87l.213-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    Close: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${c}"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`,
    Trash: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${c}"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.124-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.077-2.09.921-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>`,
    LocationMarker: (c = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${c}"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>`,
};
const getWeatherIconHTML = (code, description) => {
    const codeNum = parseInt(code, 10);
    let iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>`; // Default cloudy

    if (codeNum === 113) iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-yellow-300"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a6 6 0 100 12 6 6 0 000-12z" /></svg>`;
    else if (codeNum === 116) iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 2.25zM18.75 6a.75.75 0 01.53 1.28l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 01.53-.28zM21.75 12a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75z" /></svg>`;
    else if ([143, 248, 260].includes(codeNum)) iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 16.5h16.5M3.75 18.75h16.5" /></svg>`;
    else if (codeNum >= 200 && codeNum <= 395 && description.toLowerCase().includes('thunder')) iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-yellow-400"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 18.75l-1.5-3h3.75l-1.5 4.5v-3h-1.5z" /></svg>`;
    else if ([179, 182, 227, 230, 317, 320, 323, 326, 329, 332, 335, 338, 350, 362, 365, 368, 371, 374, 377, 392, 395].includes(codeNum)) iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75l.75-.75m-.75.75l-.75-.75m.75.75v1.5m-3-3.75l.75-.75m-.75.75l-.75-.75m.75.75v1.5m6-1.5l.75-.75m-.75.75l-.75-.75m.75.75v1.5" /></svg>`;
    else if ([176, 185, 263, 266, 281, 284, 293, 296, 299, 302, 305, 308, 311, 314, 353, 356, 359, 386, 389].includes(codeNum)) iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-blue-300"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21a1.5 1.5 0 003 0m-10.5-9A4.5 4.5 0 005.25 6H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 15.75l-1.5 1.5m3-3l-1.5 1.5m3-3l-1.5 1.5" /></svg>`;
    
    return `<div title="${description}">${iconHTML}</div>`;
};

// =================================================================================
// MAIN APP LOGIC
// =================================================================================
const STORAGE_VERSION = 1;
const MAX_SEARCH_HISTORY = 50;
const MAX_WALLPAPER_DATA_SIZE = 500 * 1024;

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const elements = {
        wallpaperBg: document.getElementById('wallpaper-bg'),
        loadingOverlay: document.getElementById('loading-overlay'),
        weather: {
            container: document.getElementById('weather-widget-container'),
            content: document.getElementById('weather-content'),
            locationForm: document.getElementById('location-form'),
            locationInput: document.getElementById('location-input'),
            locationDisplay: document.getElementById('location-display'),
            useGeolocationBtn: document.getElementById('use-geolocation-btn'),
        },
        clock: {
            time: document.getElementById('clock-time'),
            date: document.getElementById('clock-date'),
        },
        search: {
            form: document.getElementById('search-form'),
            input: document.getElementById('search-input'),
            engineBtn: document.getElementById('search-engine-btn'),
            suggestionsContainer: document.getElementById('suggestions-container'),
        },
        settings: {
            modal: document.getElementById('settings-modal'),
            modalContent: document.getElementById('settings-modal-content'),
            openBtn: document.getElementById('open-settings-btn'),
            closeBtn: document.getElementById('close-settings-btn'),
            themeToggleBtn: document.getElementById('theme-toggle-btn'),
            uploadWallpaperBtn: document.getElementById('upload-wallpaper-btn'),
            localWallpaperInput: document.getElementById('local-wallpaper-input'),
            bingWallpaperBtn: document.getElementById('bing-wallpaper-btn'),
            wallpaperBlurSlider: document.getElementById('wallpaper-blur-slider'),
            wallpaperBlurValue: document.getElementById('wallpaper-blur-value'),
            tempUnitToggle: document.getElementById('temp-unit-toggle'),
            enginesList: document.getElementById('search-engines-list'),
            addEngineForm: document.getElementById('add-engine-form'),
            newEngineName: document.getElementById('new-engine-name'),
            newEngineUrl: document.getElementById('new-engine-url'),
        },
        wallpaperInfo: document.getElementById('wallpaper-info'),
    };

    // State
    const state = {
        theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
        temperatureUnit: localStorage.getItem('temperatureUnit') || 'F',
        wallpaperUrl: localStorage.getItem('wallpaperUrl'),
        wallpaperBlur: parseInt(localStorage.getItem('wallpaperBlur') || '8', 10),
        searchEngines: JSON.parse(localStorage.getItem('searchEngines') || JSON.stringify([{ name: 'Bing', urlTemplate: 'https://www.bing.com/search?q=%s' }, { name: 'Google', urlTemplate: 'https://www.google.com/search?q=%s' }])),
        currentSearchEngineIndex: parseInt(localStorage.getItem('currentSearchEngineIndex') || '0', 10),
        searchHistory: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
        location: localStorage.getItem('weatherLocation') || '',
        locationLabel: localStorage.getItem('weatherLocationLabel') || '',
        suggestions: [],
        highlightedSuggestion: -1,
        debounceTimeout: null,
        abortController: null,
    };

    // Storage migration & cleanup
    (() => {
        const version = parseInt(localStorage.getItem('storageVersion') || '0', 10);
        if (version < STORAGE_VERSION) {
            // Clean up oversized data:image wallpapers
            const url = localStorage.getItem('wallpaperUrl');
            if (url && url.startsWith('data:image')) {
                const size = new Blob([url]).size;
                if (size > MAX_WALLPAPER_DATA_SIZE) {
                    localStorage.removeItem('wallpaperUrl');
                    state.wallpaperUrl = null;
                }
            }
            localStorage.setItem('storageVersion', STORAGE_VERSION);
        }
    })();

    // Render/Update functions
    const renderTheme = () => {
        document.documentElement.classList.toggle('dark', state.theme === 'dark');
        elements.settings.themeToggleBtn.innerHTML = state.theme === 'dark' ? Icons.Sun('w-5 h-5') : Icons.Moon('w-5 h-5');
        localStorage.setItem('theme', state.theme);
    };

    let preloadedUrl = null;

    const renderWallpaper = () => {
        if (state.wallpaperUrl) {
            if (state.wallpaperUrl !== preloadedUrl) {
                preloadedUrl = state.wallpaperUrl;
                const img = new Image();
                img.onload = () => {
                    elements.wallpaperBg.style.backgroundImage = `url(${state.wallpaperUrl})`;
                };
                img.onerror = () => {
                    elements.wallpaperBg.style.backgroundImage = 'none';
                };
                img.src = state.wallpaperUrl;
            }
        } else {
            preloadedUrl = null;
            elements.wallpaperBg.style.backgroundImage = 'none';
        }
        elements.wallpaperBg.style.filter = `blur(${state.wallpaperBlur}px)`;
        elements.wallpaperBg.style.transform = `scale(${1 + state.wallpaperBlur / 100})`;
        elements.settings.wallpaperBlurSlider.value = state.wallpaperBlur;
        elements.settings.wallpaperBlurValue.textContent = `${state.wallpaperBlur}px`;
        localStorage.setItem('wallpaperBlur', state.wallpaperBlur);
    };

    let blurRAF = null;
    const renderWallpaperBlur = () => {
        if (blurRAF) cancelAnimationFrame(blurRAF);
        blurRAF = requestAnimationFrame(() => {
            elements.wallpaperBg.style.filter = `blur(${state.wallpaperBlur}px)`;
            elements.wallpaperBg.style.transform = `scale(${1 + state.wallpaperBlur / 100})`;
            elements.settings.wallpaperBlurValue.textContent = `${state.wallpaperBlur}px`;
        });
    };

    const renderClock = () => {
        const now = new Date();
        elements.clock.time.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        elements.clock.date.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    const renderSearchEngine = () => {
        const engine = state.searchEngines[state.currentSearchEngineIndex];
        if (!engine) {
            state.currentSearchEngineIndex = 0;
            renderSearchEngine();
            return;
        }
        elements.search.engineBtn.title = `Current engine: ${engine.name}`;
        
        const engineName = engine.name.toLowerCase();
        if (engineName === 'google') elements.search.engineBtn.innerHTML = Icons.Google();
        else if (engineName === 'bing') elements.search.engineBtn.innerHTML = Icons.Bing();
        else {
             try {
                const url = new URL(engine.urlTemplate);
                elements.search.engineBtn.innerHTML = `<img src="https://www.google.com/s2/favicons?sz=32&domain_url=${url.hostname}" alt="${engine.name} icon" class="w-6 h-6 rounded-sm object-contain">`;
            } catch {
                elements.search.engineBtn.innerHTML = Icons.Search();
            }
        }
        localStorage.setItem('currentSearchEngineIndex', state.currentSearchEngineIndex);
    };

    const renderSearchEnginesList = () => {
        elements.settings.enginesList.innerHTML = state.searchEngines.map((engine, index) => `
            <div class="flex items-center justify-between p-2 rounded-md bg-white/5">
                <span class="font-medium">${engine.name}</span>
                <button data-index="${index}" class="remove-engine-btn p-1 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-full" aria-label="Remove ${engine.name}">
                    ${Icons.Trash('w-4 h-4')}
                </button>
            </div>
        `).join('');
    };
    
    const renderWeather = (data, error) => {
        if (error) {
            elements.weather.content.innerHTML = `<p class="text-sm text-red-300">${error}</p>`;
            return;
        }
        if (!data) {
            elements.weather.content.innerHTML = `<p class="text-sm animate-pulse">Loading weather...</p>`;
            return;
        }
        const current = data.current_condition[0];
        const temp = state.temperatureUnit === 'F' ? current.temp_F : current.temp_C;
        const feelsLike = state.temperatureUnit === 'F' ? current.FeelsLikeF : current.FeelsLikeC;
        elements.weather.content.innerHTML = `
            <div class="flex items-center space-x-3">
                ${getWeatherIconHTML(current.weatherCode, current.weatherDesc[0].value)}
                <div>
                    <p class="font-bold text-2xl" style="text-shadow: 0 1px 3px rgba(0,0,0,0.5)">${temp}°${state.temperatureUnit}</p>
                    <p class="text-xs -mt-1 opacity-90">Feels like ${feelsLike}°</p>
                </div>
            </div>
        `;
        const area = data.nearest_area[0];
        const displayName = area ? `${area.areaName[0].value}, ${area.country[0].value}` : (state.locationLabel || 'Set Location');
        elements.weather.locationDisplay.textContent = displayName;
    };
    
    const renderSuggestions = () => {
        const query = elements.search.input.value.trim();
        const showSuggestions = query.length > 0 && state.suggestions.length > 0;
        const showHistory = !showSuggestions && state.searchHistory.length > 0;

        if (!showSuggestions && !showHistory) {
            elements.search.suggestionsContainer.classList.add('hidden');
            elements.search.input.setAttribute('aria-expanded', 'false');
            return;
        }

        elements.search.input.setAttribute('aria-expanded', 'true');

        let content = '';
        if (showSuggestions) {
            content = `<ul class="py-2">${state.suggestions.map((term, index) => {
                const isHighlighted = index === state.highlightedSuggestion;
                return `
                <li class="${isHighlighted ? 'bg-white/10' : ''}">
                    <button class="suggestion-item w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors"
                        role="option" id="suggestion-${index}" aria-selected="${isHighlighted}"
                        data-term="${term}">${term}</button>
                </li>`;
            }).join('')}</ul>`;
            if (state.highlightedSuggestion > -1) {
                elements.search.input.setAttribute('aria-activedescendant', `suggestion-${state.highlightedSuggestion}`);
            }
        } else if (showHistory) {
            elements.search.input.removeAttribute('aria-activedescendant');
            elements.search.input.setAttribute('aria-expanded', 'true');
            content = `
                <ul class="py-2">${state.searchHistory.map((term, index) => `
                    <li><button class="history-item w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors"
                        role="option" id="history-${index}"
                        data-term="${term}">${term}</button></li>
                `).join('')}</ul>
                <div class="border-t border-white/20 px-4 py-2">
                    <button id="clear-history-btn" class="text-sm text-white/70 hover:text-white transition-colors">Clear history</button>
                </div>
            `;
        }
        elements.search.suggestionsContainer.innerHTML = content;
        elements.search.suggestionsContainer.classList.remove('hidden');
    };

    // API/Async functions
    const fetchBingWallpaper = async () => {
        elements.loadingOverlay.classList.remove('hidden');
        setWallpaperInfo('Fetching Bing daily wallpaper...');
        try {
            let res = await fetch('/api/bing-wallpaper');
            if (!res.ok) throw new Error('Proxy failed');
            const data = await res.json();
            state.wallpaperUrl = `https://www.bing.com${data.images[0].url}`;
            setWallpaperInfo(data.images[0].copyright);
        } catch {
            try {
                const res = await fetch('https://bing.biturl.top/?resolution=1920&format=json');
                if (!res.ok) throw new Error('Fallback API failed');
                const data = await res.json();
                state.wallpaperUrl = data.url;
                setWallpaperInfo(data.copyright);
            } catch {
                state.wallpaperUrl = 'https://picsum.photos/1920/1080';
                setWallpaperInfo('Failed to load Bing wallpaper. Showing a random image.');
            }
        }
        localStorage.removeItem('wallpaperUrl');
        renderWallpaper();
        elements.loadingOverlay.classList.add('hidden');
    };
    
    const fetchWeatherData = async () => {
        if (!state.location) return;
        renderWeather(null, null); // Show loading
        try {
            const res = await fetch(`https://wttr.in/${encodeURIComponent(state.location)}?format=j1`);
            if (!res.ok) throw new Error('Location not found');
            const data = await res.json();
            if (data.current_condition) {
                renderWeather(data, null);
            } else {
                throw new Error('Invalid location data');
            }
        } catch (error) {
            console.error("Failed to fetch weather:", error);
            renderWeather(null, 'Could not get weather.');
        }
    };
    
    const fetchSuggestions = async (query, signal) => {
        const engine = state.searchEngines[state.currentSearchEngineIndex];
        const engineName = engine?.name.toLowerCase();
        if (engineName !== 'google' && engineName !== 'bing') {
            state.suggestions = [];
            renderSuggestions();
            return;
        }

        const jsonpFetch = (url) => new Promise((resolve, reject) => {
            const callbackName = 'zs_cb_' + Date.now();
            const script = document.createElement('script');
            const timeout = setTimeout(() => {
                cleanup();
                reject(new Error('Timeout'));
            }, 3000);

            const cleanup = () => {
                clearTimeout(timeout);
                delete window[callbackName];
                if (script.parentNode) script.parentNode.removeChild(script);
            };

            window[callbackName] = (data) => {
                cleanup();
                resolve(data);
            };

            script.src = url + '&callback=' + callbackName;
            script.onerror = () => {
                cleanup();
                reject(new Error('Network error'));
            };

            if (signal) {
                signal.addEventListener('abort', () => {
                    cleanup();
                    reject(new DOMException('Aborted', 'AbortError'));
                });
            }

            document.head.appendChild(script);
        });

        const apiUrl = engineName === 'google'
            ? `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`
            : `https://api.bing.com/osjson.aspx?query=${encodeURIComponent(query)}`;

        try {
            const data = await jsonpFetch(apiUrl);
            state.suggestions = (data[1] || []).slice(0, 6);
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("Failed to fetch search suggestions:", error);
            }
            state.suggestions = [];
        }
        renderSuggestions();
    };

    // Handlers
    const setWallpaperInfo = (info) => {
        if (info) {
            elements.wallpaperInfo.textContent = info;
            elements.wallpaperInfo.classList.remove('hidden');
        } else {
            elements.wallpaperInfo.classList.add('hidden');
        }
    };

    const handleSearch = (term) => {
        const searchTerm = term.trim();
        if (!searchTerm) return;

        const updatedHistory = [searchTerm, ...state.searchHistory.filter(item => item !== searchTerm)].slice(0, MAX_SEARCH_HISTORY);
        state.searchHistory = updatedHistory;
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
        elements.search.input.value = searchTerm;
        elements.search.suggestionsContainer.classList.add('hidden');

        const isUrl = (text) => {
            if ((text.includes('.') && !text.includes(' ')) || text.startsWith('localhost:')) return true;
            try { new URL(text); return true; } catch { return false; }
        };

        if (isUrl(searchTerm)) {
            let url = searchTerm;
            if (!/^(https?|ftp):\/\//i.test(url)) {
                url = `https://${url}`;
            }
            window.location.href = url;
        } else {
            const engine = state.searchEngines[state.currentSearchEngineIndex];
            window.location.href = engine.urlTemplate.replace('%s', encodeURIComponent(searchTerm));
        }
    };

    const requestGeolocation = () => {
        if (!navigator.geolocation) {
            renderWeather(null, "Geolocation not supported.");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            pos => {
                const { latitude, longitude } = pos.coords;
                state.location = `${latitude},${longitude}`;
                state.locationLabel = 'Current Location';
                localStorage.setItem('weatherLocation', state.location);
                localStorage.setItem('weatherLocationLabel', state.locationLabel);
                fetchWeatherData();
            },
            () => {
                renderWeather(null, "Location access denied.");
                if (!state.location) {
                    state.location = 'New York';
                    state.locationLabel = 'New York';
                    localStorage.setItem('weatherLocation', state.location);
                    localStorage.setItem('weatherLocationLabel', state.locationLabel);
                    fetchWeatherData();
                }
            }
        );
    };

    // Event Listeners Setup
    const setupEventListeners = () => {
        // Theme
        elements.settings.themeToggleBtn.addEventListener('click', () => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            renderTheme();
        });

        // Clock with visibility awareness
        let clockInterval;
        const startClock = () => {
            renderClock();
            clockInterval = setInterval(renderClock, 1000);
        };
        const stopClock = () => clearInterval(clockInterval);
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stopClock();
            else startClock();
        });
        startClock();

        // Focus trap for settings modal
    let previousActiveElement = null;
    let focusTrapHandler = null;

    const trapFocus = (modal) => {
        const focusable = modal.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (focusTrapHandler) {
            modal.removeEventListener('keydown', focusTrapHandler);
        }

        focusTrapHandler = (e) => {
            if (e.key === 'Escape') {
                closeSettingsModal();
                return;
            }
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        modal.addEventListener('keydown', focusTrapHandler);

        first.focus();
    };

    const openSettingsModal = () => {
        previousActiveElement = document.activeElement;
        elements.settings.modal.classList.remove('hidden');
        trapFocus(elements.settings.modalContent);
    };

    const closeSettingsModal = () => {
        elements.settings.modal.classList.add('hidden');
        if (focusTrapHandler && elements.settings.modalContent) {
            elements.settings.modalContent.removeEventListener('keydown', focusTrapHandler);
            focusTrapHandler = null;
        }
        if (previousActiveElement) {
            previousActiveElement.focus();
            previousActiveElement = null;
        }
    };

    // Settings Modal
    elements.settings.openBtn.addEventListener('click', openSettingsModal);
    elements.settings.closeBtn.addEventListener('click', closeSettingsModal);
    elements.settings.modal.addEventListener('click', (e) => {
        if (e.target === elements.settings.modal) closeSettingsModal();
    });

        // Wallpaper
        elements.settings.uploadWallpaperBtn.addEventListener('click', () => elements.settings.localWallpaperInput.click());
        elements.settings.localWallpaperInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (file.size > MAX_WALLPAPER_DATA_SIZE) {
                alert(`Image too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Max size is ${MAX_WALLPAPER_DATA_SIZE / 1024}KB.`);
                return;
            }
            const reader = new FileReader();
            reader.onload = (re) => {
                state.wallpaperUrl = re.target.result;
                localStorage.setItem('wallpaperUrl', state.wallpaperUrl);
                setWallpaperInfo(file.name);
                renderWallpaper();
            };
            reader.readAsDataURL(file);
        });
        elements.settings.bingWallpaperBtn.addEventListener('click', fetchBingWallpaper);
        elements.settings.wallpaperBlurSlider.addEventListener('input', (e) => {
            state.wallpaperBlur = parseInt(e.target.value, 10);
            localStorage.setItem('wallpaperBlur', state.wallpaperBlur);
            renderWallpaperBlur();
        });

        // Weather
        elements.settings.tempUnitToggle.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                state.temperatureUnit = e.target.dataset.unit;
                localStorage.setItem('temperatureUnit', state.temperatureUnit);
                document.querySelectorAll('#temp-unit-toggle button').forEach(btn => {
                    const isPressed = btn.dataset.unit === state.temperatureUnit;
                    btn.setAttribute('aria-pressed', isPressed);
                    btn.classList.toggle('bg-white/30', isPressed);
                    btn.classList.toggle('bg-white/10', !isPressed);
                    btn.classList.toggle('hover:bg-white/20', !isPressed);
                });
                fetchWeatherData();
            }
        });
        elements.weather.locationDisplay.addEventListener('click', () => {
            elements.weather.locationForm.classList.remove('hidden');
            elements.weather.locationDisplay.classList.add('hidden');
            elements.weather.locationInput.value = state.locationLabel;
            elements.weather.locationInput.focus();
        });
        elements.weather.locationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newLocation = elements.weather.locationInput.value.trim();
            if (newLocation) {
                state.location = newLocation;
                state.locationLabel = newLocation;
                localStorage.setItem('weatherLocation', state.location);
                localStorage.setItem('weatherLocationLabel', state.locationLabel);
                fetchWeatherData();
            }
            elements.weather.locationForm.classList.add('hidden');
            elements.weather.locationDisplay.classList.remove('hidden');
        });
        elements.weather.locationInput.addEventListener('blur', () => elements.weather.locationForm.requestSubmit());
        elements.weather.useGeolocationBtn.addEventListener('click', requestGeolocation);

        // Search
        elements.search.form.addEventListener('submit', (e) => {
            e.preventDefault();
            let searchTerm = elements.search.input.value;
            if (state.highlightedSuggestion > -1 && state.suggestions[state.highlightedSuggestion]) {
                searchTerm = state.suggestions[state.highlightedSuggestion];
            }
            handleSearch(searchTerm);
        });
        elements.search.input.addEventListener('input', () => {
            state.highlightedSuggestion = -1;
            clearTimeout(state.debounceTimeout);
            if (state.abortController) state.abortController.abort();
            const query = elements.search.input.value.trim();
            if (!query) {
                state.suggestions = [];
                renderSuggestions();
                return;
            }
            state.debounceTimeout = setTimeout(() => {
                state.abortController = new AbortController();
                fetchSuggestions(query, state.abortController.signal);
            }, 250);
        });
        elements.search.input.addEventListener('focus', renderSuggestions);
        document.addEventListener('click', (e) => {
            if (!elements.search.form.contains(e.target)) {
                elements.search.suggestionsContainer.classList.add('hidden');
                elements.search.input.setAttribute('aria-expanded', 'false');
                elements.search.input.removeAttribute('aria-activedescendant');
            }
        });
        elements.search.input.addEventListener('keydown', (e) => {
            if (state.suggestions.length === 0) return;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                state.highlightedSuggestion = (state.highlightedSuggestion + 1) % state.suggestions.length;
                renderSuggestions();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                state.highlightedSuggestion = (state.highlightedSuggestion - 1 + state.suggestions.length) % state.suggestions.length;
                renderSuggestions();
            } else if (e.key === 'Escape') {
                state.highlightedSuggestion = -1;
                elements.search.suggestionsContainer.classList.add('hidden');
                elements.search.input.setAttribute('aria-expanded', 'false');
                elements.search.input.removeAttribute('aria-activedescendant');
            } else if (e.key === 'Enter' && state.highlightedSuggestion > -1) {
                e.preventDefault();
                handleSearch(state.suggestions[state.highlightedSuggestion]);
            }
        });
        elements.search.suggestionsContainer.addEventListener('mousedown', (e) => {
            if (e.target.matches('.suggestion-item, .history-item')) {
                handleSearch(e.target.dataset.term);
            } else if (e.target.id === 'clear-history-btn') {
                state.searchHistory = [];
                localStorage.removeItem('searchHistory');
                renderSuggestions();
            }
        });
        elements.search.engineBtn.addEventListener('click', () => {
            state.currentSearchEngineIndex = (state.currentSearchEngineIndex + 1) % state.searchEngines.length;
            renderSearchEngine();
        });
        elements.settings.addEngineForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = elements.settings.newEngineName.value.trim();
            const url = elements.settings.newEngineUrl.value.trim();
            if (name && url.includes('%s')) {
                state.searchEngines.push({ name, urlTemplate: url });
                localStorage.setItem('searchEngines', JSON.stringify(state.searchEngines));
                renderSearchEnginesList();
                elements.settings.addEngineForm.reset();
            } else {
                alert('Invalid engine. Name and URL with %s are required.');
            }
        });
        elements.settings.enginesList.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-engine-btn');
            if (removeBtn) {
                const index = parseInt(removeBtn.dataset.index, 10);
                state.searchEngines.splice(index, 1);
                localStorage.setItem('searchEngines', JSON.stringify(state.searchEngines));
                renderSearchEnginesList();
                renderSearchEngine();
            }
        });
    };

    // Initialisation
    const init = () => {
        // Insert static icons
        elements.weather.useGeolocationBtn.innerHTML = Icons.LocationMarker('w-4 h-4');
        elements.search.form.querySelector('button[type="submit"]').innerHTML = Icons.Search();
        elements.settings.openBtn.innerHTML = Icons.Settings('w-5 h-5');
        elements.settings.closeBtn.innerHTML = Icons.Close('w-5 h-5');
        elements.settings.uploadWallpaperBtn.insertAdjacentHTML('afterbegin', Icons.Upload('w-5 h-5'));
        elements.settings.bingWallpaperBtn.insertAdjacentHTML('afterbegin', Icons.Bing('w-5 h-5'));

        // Render initial state
        renderTheme();
        renderWallpaper();
        renderClock();
        renderSearchEngine();
        renderSearchEnginesList();
        
        // Setup temperature unit buttons
        document.querySelectorAll('#temp-unit-toggle button').forEach(btn => {
            const isPressed = btn.dataset.unit === state.temperatureUnit;
            btn.setAttribute('aria-pressed', isPressed);
            btn.classList.toggle('bg-white/30', isPressed);
            btn.classList.toggle('bg-white/10', !isPressed);
            btn.classList.toggle('hover:bg-white/20', !isPressed);
        });

        // Load wallpaper
        if (!state.wallpaperUrl) {
            fetchBingWallpaper();
        } else {
            if (state.wallpaperUrl.startsWith('data:image')) {
                setWallpaperInfo('Local wallpaper');
            }
            elements.loadingOverlay.classList.add('hidden');
        }

        // Load weather
        if (state.location) {
            fetchWeatherData();
        } else {
            requestGeolocation();
        }

        // Set up all event listeners
        setupEventListeners();
    };

    init();
});

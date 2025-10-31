import React, { useState, useEffect, useCallback } from 'react';
import Clock from './components/Clock';
import SettingsPanel from './components/SettingsPanel';
import SearchBar from './components/SearchBar';
import WeatherWidget from './components/WeatherWidget';
import SettingsModal from './components/SettingsModal';

type Theme = 'light' | 'dark';
export type TemperatureUnit = 'F' | 'C';

export interface SearchEngine {
    name: string;
    urlTemplate: string;
}

// Define a more specific type for the weather data we expect
export interface WeatherData {
    current_condition: {
        temp_F: string;
        temp_C: string;
        FeelsLikeF: string;
        FeelsLikeC: string;
        weatherCode: string;
        weatherDesc: { value: string }[];
    }[];
}

const DEFAULT_SEARCH_ENGINES: SearchEngine[] = [
    { name: 'Bing', urlTemplate: 'https://www.bing.com/search?q=%s' },
    { name: 'Google', urlTemplate: 'https://www.google.com/search?q=%s' },
];

const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    
    const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(
        () => (localStorage.getItem('temperatureUnit') as TemperatureUnit) || 'F'
    );

    const [wallpaperUrl, setWallpaperUrl] = useState<string | null>(localStorage.getItem('wallpaperUrl'));
    const [wallpaperBlur, setWallpaperBlur] = useState<number>(() => {
        const savedBlur = localStorage.getItem('wallpaperBlur');
        return savedBlur ? parseInt(savedBlur, 10) : 8;
    });
    const [isLoading, setIsLoading] = useState<boolean>(!wallpaperUrl);
    const [wallpaperInfo, setWallpaperInfo] = useState<string>('');
    
    const [searchEngines, setSearchEngines] = useState<SearchEngine[]>(() => {
        const savedEngines = localStorage.getItem('searchEngines');
        try {
            if (savedEngines) {
                const parsed = JSON.parse(savedEngines);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            }
        } catch (e) {
            console.error("Failed to parse search engines from localStorage", e);
        }
        return DEFAULT_SEARCH_ENGINES;
    });

    const [currentSearchEngineIndex, setCurrentSearchEngineIndex] = useState<number>(() => {
        const savedIndex = localStorage.getItem('currentSearchEngineIndex');
        return savedIndex ? parseInt(savedIndex, 10) : 0;
    });
    
    const [location, setLocation] = useState<string>(() => localStorage.getItem('weatherLocation') || '');
    const [locationLabel, setLocationLabel] = useState<string>(() => localStorage.getItem('weatherLocationLabel') || '');

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [weatherError, setWeatherError] = useState<string | null>(null);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);


    const fetchBingWallpaper = useCallback(async () => {
        setIsLoading(true);
        setWallpaperInfo('Fetching Bing daily wallpaper...');
        try {
            const proxyUrl = 'https://corsproxy.io/?';
            const bingApiUrl = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US';
            const response = await fetch(`${proxyUrl}${encodeURIComponent(bingApiUrl)}`);
            if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
            const data = await response.json();
            const imageUrl = `https://www.bing.com${data.images[0].url}`;
            setWallpaperUrl(imageUrl);
            setWallpaperInfo(data.images[0].copyright);
            localStorage.removeItem('wallpaperUrl'); 
        } catch (error) {
            console.error("Failed to fetch Bing wallpaper:", error);
            setWallpaperUrl('https://picsum.photos/1920/1080'); // Fallback
            setWallpaperInfo('Failed to load Bing wallpaper. Showing a random image.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const requestGeolocation = useCallback(() => {
        if (!navigator.geolocation) {
            setWeatherError("Geolocation is not supported.");
            return;
        }
        setWeatherData(null);
        setWeatherError(null);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const newLocation = `${latitude},${longitude}`;
                const newLocationLabel = 'Current Location';
                localStorage.setItem('weatherLocation', newLocation);
                localStorage.setItem('weatherLocationLabel', newLocationLabel);
                setLocation(newLocation);
                setLocationLabel(newLocationLabel);
            },
            () => {
                setWeatherError("Location access denied.");
                if (!localStorage.getItem('weatherLocation')) {
                    const defaultLocation = 'New York';
                    localStorage.setItem('weatherLocation', defaultLocation);
                    localStorage.setItem('weatherLocationLabel', defaultLocation);
                    setLocation(defaultLocation);
                    setLocationLabel(defaultLocation);
                }
            }
        );
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    useEffect(() => {
        localStorage.setItem('temperatureUnit', temperatureUnit);
    }, [temperatureUnit]);
    
    useEffect(() => {
        localStorage.setItem('wallpaperBlur', wallpaperBlur.toString());
    }, [wallpaperBlur]);

    useEffect(() => {
        localStorage.setItem('searchEngines', JSON.stringify(searchEngines));
        if (currentSearchEngineIndex >= searchEngines.length) {
            setCurrentSearchEngineIndex(0);
        }
    }, [searchEngines, currentSearchEngineIndex]);

    useEffect(() => {
        localStorage.setItem('currentSearchEngineIndex', currentSearchEngineIndex.toString());
    }, [currentSearchEngineIndex]);

    useEffect(() => {
        if (!wallpaperUrl) {
            fetchBingWallpaper();
        } else {
            if (wallpaperUrl.startsWith('data:image')) {
                setWallpaperInfo('Local wallpaper');
            } else {
                setWallpaperInfo(''); 
            }
            setIsLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        const savedLocation = localStorage.getItem('weatherLocation');
        if (savedLocation) {
            setLocation(savedLocation);
            setLocationLabel(localStorage.getItem('weatherLocationLabel') || savedLocation);
        } else {
            requestGeolocation();
        }
    }, [requestGeolocation]);
    
    useEffect(() => {
        if (!location) return;

        const fetchWeatherData = async () => {
            setWeatherData(null);
            setWeatherError(null);
            try {
                const response = await fetch(`https://wttr.in/${encodeURIComponent(location)}?format=j1`);
                if (!response.ok) {
                    throw new Error('Location not found or API error.');
                }
                const data = await response.json();
                if (data.current_condition) {
                    setWeatherData(data);
                } else {
                    throw new Error('Invalid location data.');
                }
            } catch (error) {
                console.error("Failed to fetch weather:", error);
                setWeatherError('Could not get weather.');
            }
        };

        fetchWeatherData();
    }, [location]);

    const handleThemeToggle = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    const handleTemperatureUnitChange = (unit: TemperatureUnit) => {
        setTemperatureUnit(unit);
    };
    
    const handleWallpaperBlurChange = (blur: number) => {
        setWallpaperBlur(blur);
    };

    const handleLocationChange = (newLocation: string) => {
        const trimmed = newLocation.trim();
        if(trimmed) {
            localStorage.setItem('weatherLocation', trimmed);
            localStorage.setItem('weatherLocationLabel', trimmed);
            setLocation(trimmed);
            setLocationLabel(trimmed);
        }
    };

    const handleLocalWallpaperSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setWallpaperUrl(result);
                localStorage.setItem('wallpaperUrl', result);
                setWallpaperInfo(file.name);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSearchEngineChange = () => {
        setCurrentSearchEngineIndex(prevIndex => (prevIndex + 1) % searchEngines.length);
    };
    
    const handleAddSearchEngine = (engine: SearchEngine) => {
        if (engine.name.trim() && engine.urlTemplate.trim().includes('%s')) {
            setSearchEngines(prev => [...prev, engine]);
        } else {
            alert('Invalid search engine. Please provide a name and a URL template containing "%s".');
        }
    };
    
    const handleRemoveSearchEngine = (indexToRemove: number) => {
        setSearchEngines(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleSearch = (query: string) => {
        if (!query.trim()) return;

        const isUrl = (text: string) => {
            if ((text.includes('.') && !text.includes(' ')) || text.startsWith('localhost:')) {
                return true;
            }
            try {
                new URL(text);
                return true;
            } catch (_) {
                return false;
            }
        };

        if (isUrl(query)) {
            let url = query;
            if (query.startsWith('localhost:')) {
                 url = `http://${query}`;
            } else if (!query.startsWith('http://') && !query.startsWith('https://')) {
                 url = `https://${query}`;
            }
            window.location.href = url;
        } else {
            const currentEngine = searchEngines[currentSearchEngineIndex];
            const searchUrl = currentEngine.urlTemplate.replace('%s', encodeURIComponent(query));
            window.location.href = searchUrl;
        }
    };
    
    return (
        <main className="relative h-screen w-screen overflow-hidden text-slate-800 dark:text-white transition-colors duration-500">
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{
                    backgroundImage: wallpaperUrl ? `url(${wallpaperUrl})` : 'none',
                    backgroundColor: theme === 'dark' ? '#111827' : '#f9fafb',
                    filter: `blur(${wallpaperBlur}px)`,
                    transform: `scale(${1 + wallpaperBlur / 100})`, // Scale up to avoid sharp edges from blur
                }}
            />
            
            {isLoading && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="text-white text-2xl animate-pulse">Loading...</div>
                </div>
            )}
            
            <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-30 transition-opacity" />
            
            <WeatherWidget
                locationLabel={locationLabel}
                onLocationChange={handleLocationChange}
                onRequestGeolocation={requestGeolocation}
                weatherData={weatherData}
                weatherError={weatherError}
                unit={temperatureUnit}
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
                <div className="p-8 md:p-12 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl w-full max-w-2xl transition-all duration-300">
                    <Clock />
                    <SearchBar 
                        currentEngine={searchEngines[currentSearchEngineIndex]}
                        onSearchEngineChange={handleSearchEngineChange}
                        onSearch={handleSearch}
                    />
                </div>
            </div>

            <SettingsPanel 
                theme={theme} 
                onThemeToggle={handleThemeToggle}
                onOpenSettings={() => setIsSettingsModalOpen(true)}
            />
            
            <SettingsModal 
                isOpen={isSettingsModalOpen}
                onClose={() => setIsSettingsModalOpen(false)}
                onLocalWallpaperSelect={handleLocalWallpaperSelect}
                onBingWallpaperSelect={fetchBingWallpaper}
                searchEngines={searchEngines}
                onAddSearchEngine={handleAddSearchEngine}
                onRemoveSearchEngine={handleRemoveSearchEngine}
                temperatureUnit={temperatureUnit}
                onTemperatureUnitChange={handleTemperatureUnitChange}
                wallpaperBlur={wallpaperBlur}
                onWallpaperBlurChange={handleWallpaperBlurChange}
            />

            {wallpaperInfo && (
                <div className="absolute bottom-4 left-4 text-white text-sm bg-black/40 p-2 rounded-md backdrop-blur-sm max-w-xs md:max-w-md text-ellipsis overflow-hidden whitespace-nowrap">
                    {wallpaperInfo}
                </div>
            )}
        </main>
    );
};

export default App;
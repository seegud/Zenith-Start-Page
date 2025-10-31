import React, { useState, useEffect } from 'react';
import { LocationMarkerIcon } from './Icons';
import WeatherIcon from './WeatherIcon';
import { WeatherData, TemperatureUnit } from '../App';

interface WeatherWidgetProps {
    locationLabel: string;
    onLocationChange: (newLocation: string) => void;
    onRequestGeolocation: () => void;
    weatherData: WeatherData | null;
    weatherError: string | null;
    unit: TemperatureUnit;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ 
    locationLabel, 
    onLocationChange, 
    onRequestGeolocation,
    weatherData, 
    weatherError,
    unit,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(locationLabel);

    useEffect(() => {
        setInputValue(locationLabel);
    }, [locationLabel]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedValue = inputValue.trim();
        if (trimmedValue && trimmedValue !== locationLabel) {
            onLocationChange(trimmedValue);
        }
        setIsEditing(false);
    };

    const handleBlur = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue && trimmedValue !== locationLabel) {
            onLocationChange(trimmedValue);
        }
        setIsEditing(false);
    };

    const renderContent = () => {
        if (weatherError) {
            return <p className="text-sm text-red-300">{weatherError}</p>;
        }
        if (!weatherData) {
            return <p className="text-sm animate-pulse">Loading weather...</p>;
        }

        const current = weatherData.current_condition[0];
        const temp = unit === 'F' ? current.temp_F : current.temp_C;
        const feelsLike = unit === 'F' ? current.FeelsLikeF : current.FeelsLikeC;

        return (
            <div className="flex items-center space-x-3">
                <WeatherIcon code={current.weatherCode} description={current.weatherDesc[0].value} />
                <div>
                    <p className="font-bold text-2xl" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{temp}°{unit}</p>
                    <p className="text-xs -mt-1 opacity-90">Feels like {feelsLike}°</p>
                </div>
            </div>
        );
    };

    return (
        <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg text-white transition-all duration-300">
            <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                    {isEditing ? (
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onBlur={handleBlur}
                                className="bg-transparent text-sm font-semibold outline-none border-b border-white/50 focus:border-white w-28 placeholder-white/70"
                                placeholder="Enter City"
                                aria-label="Enter location for weather"
                                autoFocus
                            />
                        </form>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="text-sm font-semibold text-left hover:opacity-80 transition-opacity" title="Click to change location">
                            {locationLabel || 'Set Location'}
                        </button>
                    )}
                     <button onClick={onRequestGeolocation} className="text-white/80 hover:text-white transition-opacity" title="Use current location" aria-label="Use current location">
                        <LocationMarkerIcon className="w-4 h-4" />
                    </button>
                </div>
                <div className="mt-2 h-12 flex items-center">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;

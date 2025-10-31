import React, { useState, useRef } from 'react';
import { SearchEngine, TemperatureUnit } from '../App';
import { CloseIcon, UploadIcon, BingIcon, TrashIcon } from './Icons';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLocalWallpaperSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBingWallpaperSelect: () => void;
    searchEngines: SearchEngine[];
    onAddSearchEngine: (engine: SearchEngine) => void;
    onRemoveSearchEngine: (index: number) => void;
    temperatureUnit: TemperatureUnit;
    onTemperatureUnitChange: (unit: TemperatureUnit) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
    isOpen, 
    onClose,
    onLocalWallpaperSelect,
    onBingWallpaperSelect,
    searchEngines,
    onAddSearchEngine,
    onRemoveSearchEngine,
    temperatureUnit,
    onTemperatureUnitChange
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [newEngineName, setNewEngineName] = useState('');
    const [newEngineUrl, setNewEngineUrl] = useState('');

    if (!isOpen) return null;

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleAddEngine = (e: React.FormEvent) => {
        e.preventDefault();
        onAddSearchEngine({ name: newEngineName, urlTemplate: newEngineUrl });
        setNewEngineName('');
        setNewEngineUrl('');
    };

    const activeUnitClasses = 'bg-white/30';
    const inactiveUnitClasses = 'bg-white/10 hover:bg-white/20';

    return (
        <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative p-8 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl w-full max-w-md text-white transition-all"
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:bg-white/20 hover:text-white"
                    aria-label="Close settings"
                >
                    <CloseIcon className="w-5 h-5" />
                </button>
                
                <h2 className="text-2xl font-bold mb-6">Settings</h2>

                {/* Wallpaper Settings */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 border-b border-white/20 pb-2">Wallpaper</h3>
                    <div className="flex space-x-4">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={onLocalWallpaperSelect}
                            className="hidden"
                            accept="image/*"
                        />
                        <button
                            onClick={handleUploadClick}
                            className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <UploadIcon className="w-5 h-5" />
                            <span>Upload Local</span>
                        </button>
                        <button
                            onClick={onBingWallpaperSelect}
                            className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <BingIcon className="w-5 h-5" />
                            <span>Use Bing Daily</span>
                        </button>
                    </div>
                </div>

                {/* Weather Settings */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 border-b border-white/20 pb-2">Weather</h3>
                     <div className="flex items-center justify-between">
                        <label htmlFor="temp-unit" className="font-medium">Temperature Unit</label>
                        <div className="flex rounded-lg p-1 bg-black/20">
                            <button 
                                onClick={() => onTemperatureUnitChange('F')}
                                className={`px-4 py-1 rounded-md text-sm font-semibold transition-colors ${temperatureUnit === 'F' ? activeUnitClasses : inactiveUnitClasses}`}
                                aria-pressed={temperatureUnit === 'F'}
                            >
                                °F
                            </button>
                            <button 
                                onClick={() => onTemperatureUnitChange('C')}
                                className={`px-4 py-1 rounded-md text-sm font-semibold transition-colors ${temperatureUnit === 'C' ? activeUnitClasses : inactiveUnitClasses}`}
                                aria-pressed={temperatureUnit === 'C'}
                            >
                                °C
                            </button>
                        </div>
                    </div>
                </div>


                {/* Search Engine Settings */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b border-white/20 pb-2">Search Engines</h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                        {searchEngines.map((engine, index) => (
                            <div key={index} className="flex items-center justify-between p-2 rounded-md bg-white/5">
                                <span className="font-medium">{engine.name}</span>
                                <button 
                                    onClick={() => onRemoveSearchEngine(index)}
                                    className="p-1 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-full"
                                    aria-label={`Remove ${engine.name}`}
                                >
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleAddEngine} className="mt-4 pt-4 border-t border-white/20">
                        <h4 className="font-semibold mb-2">Add New Engine</h4>
                        <div className="space-y-3">
                            <input 
                                type="text"
                                value={newEngineName}
                                onChange={e => setNewEngineName(e.target.value)}
                                placeholder="Name (e.g., DuckDuckGo)"
                                className="w-full p-2 rounded-md bg-white/10 placeholder-white/50 border border-transparent focus:outline-none focus:border-white/50"
                                required
                            />
                            <input 
                                type="text"
                                value={newEngineUrl}
                                onChange={e => setNewEngineUrl(e.target.value)}
                                placeholder="URL with %s (e.g., https://duckduckgo.com/?q=%s)"
                                className="w-full p-2 rounded-md bg-white/10 placeholder-white/50 border border-transparent focus:outline-none focus:border-white/50"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full mt-3 p-2 rounded-lg bg-blue-500/50 hover:bg-blue-500/70 transition-colors font-semibold">
                            Add Engine
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
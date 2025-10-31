import React, { useState } from 'react';
import { BingIcon, GoogleIcon, SearchIcon } from './Icons';
import { SearchEngine } from '../App';

interface SearchBarProps {
    currentEngine: SearchEngine;
    onSearchEngineChange: () => void;
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ currentEngine, onSearchEngineChange, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };
    
    const renderEngineIcon = () => {
        if (!currentEngine) return <SearchIcon className="w-5 h-5" />;
        
        const engineName = currentEngine.name.toLowerCase();
        if (engineName === 'google') return <GoogleIcon className="w-5 h-5" />;
        if (engineName === 'bing') return <BingIcon className="w-5 h-5" />;

        try {
            // Attempt to create a valid URL to extract the hostname for the favicon.
            const url = new URL(currentEngine.urlTemplate);
            const faviconUrl = `https://www.google.com/s2/favicons?sz=32&domain_url=${url.hostname}`;
            return <img src={faviconUrl} alt={`${currentEngine.name} icon`} className="w-5 h-5 rounded-sm object-contain" />;
        } catch (error) {
            // If the URL is invalid or another error occurs, fall back to the generic search icon.
            console.warn(`Could not generate favicon for "${currentEngine.name}"`, error);
            return <SearchIcon className="w-5 h-5" />;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mt-8">
            <div className="relative flex items-center w-full">
                <button
                    type="button"
                    onClick={onSearchEngineChange}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition-colors focus:outline-none rounded-full"
                    aria-label={`Switch search engine. Current: ${currentEngine?.name}`}
                    title={`Current engine: ${currentEngine?.name}`}
                >
                    {renderEngineIcon()}
                </button>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search the web or type a URL"
                    className="w-full h-14 bg-white/10 dark:bg-black/10 text-white placeholder-white/60 pl-14 pr-14 py-2 rounded-full border border-transparent focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-lg"
                    aria-label="Search input"
                    autoFocus
                />
                <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white/80 hover:text-white transition-colors focus:outline-none rounded-full"
                    aria-label="Search"
                >
                    <SearchIcon className="w-5 h-5" />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
import React from 'react';
import { SunIcon, MoonIcon, SettingsIcon } from './Icons';

type Theme = 'light' | 'dark';

interface SettingsPanelProps {
    theme: Theme;
    onThemeToggle: () => void;
    onOpenSettings: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ theme, onThemeToggle, onOpenSettings }) => {

    return (
        <div className="absolute top-4 right-4 flex items-center space-x-2 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg">
            <button
                onClick={onThemeToggle}
                className="p-2 rounded-full text-white hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>

            <button
                onClick={onOpenSettings}
                className="p-2 rounded-full text-white hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
                aria-label="Open settings"
            >
                <SettingsIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

export default SettingsPanel;

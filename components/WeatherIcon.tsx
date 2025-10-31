import React from 'react';
import { 
    SunIcon, 
    PartlyCloudyIcon, 
    CloudyIcon, 
    FogIcon, 
    RainIcon, 
    SnowIcon, 
    ThunderstormIcon 
} from './Icons';

interface WeatherIconProps {
    code: string;
    description: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ code, description }) => {
    const codeNum = parseInt(code, 10);
    let IconComponent = CloudyIcon;
    let iconColor = 'text-gray-300 dark:text-gray-400';

    if (codeNum === 113) { // Sunny/Clear
        IconComponent = SunIcon;
        iconColor = 'text-yellow-300';
    } else if (codeNum === 116) { // Partly Cloudy
        IconComponent = PartlyCloudyIcon;
        iconColor = 'text-gray-200';
    } else if (codeNum === 119 || codeNum === 122) { // Cloudy & Overcast
        IconComponent = CloudyIcon;
        iconColor = 'text-gray-400';
    } else if ([143, 248, 260].includes(codeNum)) { // Mist, Fog
        IconComponent = FogIcon;
        iconColor = 'text-gray-400';
    } else if (codeNum >= 200 && codeNum <= 395 && description.toLowerCase().includes('thunder')) { // Thunder
        IconComponent = ThunderstormIcon;
        iconColor = 'text-yellow-400';
    } else if ([179, 182, 227, 230, 317, 320, 323, 326, 329, 332, 335, 338, 350, 362, 365, 368, 371, 374, 377, 392, 395].includes(codeNum)) { // Snow/Sleet/Ice
        IconComponent = SnowIcon;
        iconColor = 'text-white';
    } else if ([176, 185, 263, 266, 281, 284, 293, 296, 299, 302, 305, 308, 311, 314, 353, 356, 359, 386, 389].includes(codeNum)) { // Rain/Drizzle
        IconComponent = RainIcon;
        iconColor = 'text-blue-300';
    }

    return (
        <div title={description}>
            <IconComponent className={`w-10 h-10 ${iconColor}`} />
        </div>
    );
};

export default WeatherIcon;

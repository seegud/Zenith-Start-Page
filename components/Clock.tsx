
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white text-shadow-lg" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </h1>
            <p className="text-base md:text-lg mt-2 opacity-90 text-white font-medium" style={{textShadow: '0 1px 5px rgba(0,0,0,0.5)'}}>
                {time.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        </div>
    );
};

export default Clock;

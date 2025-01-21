import React from 'react';
import { useState, useEffect } from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds > 4) { // Stop at 5 seconds
                    clearInterval(intervalId);
                    console.log("Timer stopped");
                    return prevSeconds;
                }
                return prevSeconds + 1;
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h1>Seconds: {seconds}</h1>
        </div>
    );
}

export default TimerComponent;

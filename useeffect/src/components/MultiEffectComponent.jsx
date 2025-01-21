import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(()  => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000); 

        return () => clearInterval(intervalId)
    }, []);

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <h2>seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
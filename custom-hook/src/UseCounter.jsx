// useCounter.js (or useCounter.jsx)
import { useState } from 'react';

// Custom Hook: useCounter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement
  };
}

export default useCounter;

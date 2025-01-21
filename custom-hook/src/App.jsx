// App.jsx
import React from 'react';
import useCounter from './useCounter'; // Import the custom hook

function App() {
  const { count, increment, decrement } = useCounter(0); // Using the custom hook

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let val = 1;

  function handleIncrement() {
    val = val + 1;
    console.log("Value of val: ", val);
    setCount(count + 1);
  }

  // It runs on every render
  useEffect(() => {
    console.log("Main ferse render gogaya hu");
  })

  return (
    <div>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <br />

      <div>
        Count: {count}
      </div>
    </div>
  )
}

export default App

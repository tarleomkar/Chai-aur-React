import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    // console.log("valued added", Math.random());
    // counter = counter + 1;
    // setCounter(counter + 1);
    // console.log("clikced", counter);
    if(counter < 20) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if(counter > 0) {
    setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
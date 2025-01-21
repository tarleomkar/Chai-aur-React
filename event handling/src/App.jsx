import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleClick() {
    alert("I am Cliked!");
  }

  function handleMouseClick() {
    alert("I am mouse hover!")
  }

  function handleInputChange(e) {
    console.log("Value changes in input box");
    console.log("Value changes in input box", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // I am writing my custom behaviour down
    alert("Form submit krdu kya")
  }

  return (
    <div>
      <button onClick={() => alert("Button click hua h")}>Click Me</button>
      {/* <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type='submit'>Submit</button>
      </form>

      <button onMouseOver={handleMouseClick}>🐭</button>

      <button onClick={handleClick}>
        Click Me
      </button> */}
    </div>
  )
}

export default App

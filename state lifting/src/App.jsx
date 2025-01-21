import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from "./components/Card"
import Crendering from './crendering/Crendering'

function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state ko sync karwadunga state
  // const [name, setName] = useState('')

  return (
    // <div>
    // <Card title="card1" name={name} setName={setName} />
    // <Card title="card2" name={name} setName={setName}/>
    // <p>I am inside parent and value of name is: {name}</p>
    // </div>
    <Crendering/>
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Exercise from './components/Exercise'
import Shoes from './components/Shoes'
<<<<<<< HEAD
// MY own Component
import ParentComponent from './components/ParentComponent'
import { Component } from 'react'
=======
>>>>>>> 8ba04309f0cc7472f9adfafe0ebefe937500613c

function App() {
  const [count, setCount] = useState(0)

  // Creating object
  let myObj = {
    username: "omkar",
    age: 21
  }

  // Creating array
  let newArr = [1, 2, 3, 4];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4'>Tailwand test</h1>
    {/* <Card username="chaiaurcode" someObj = {newArr}/> */}
    <Card username="chaiaurcode" btnText="click me"/>
    <Card username="Omkar" btnText="visit me"/>
    <Exercise brand="Mahindra 3X0"/>
    <Shoes />
<<<<<<< HEAD
    <ParentComponent />
=======
>>>>>>> 8ba04309f0cc7472f9adfafe0ebefe937500613c
    </>
  )
}

export default App

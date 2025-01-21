import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
// import MultiEffectComponent from './components/MultiEffectComponent'
import SimpleExample from './components/SimpleExample'

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // first -> side-effect function
  // second -> clean up function
  // third -> comma seprated dependency list

  // variation 1
  // runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // variatoin: 2
  // useEffect(() => {
  //   alert("I will run on each render")
  // }, [])
  
  // variatoin: 3
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])

  // variation 4
  // multiple dependecies
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // }, [count, total])

  // variation 5
  // iss baar let's add a cleanup function
  // useEffect(() => {
  //   alert("Count is updated")
  //   return () => {
  //     alert("Count is unmounted from UI")
  //   }
  // }, [count])

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }

  return (
    <div>
      {/* <button onClick={handleClick}>Click Me!</button>
      <br />
      <p>Count is: {count}</p>

      <br />

      <button onClick={handleClickTotal}>Update Total
      </button>
      <br />
      <p>Total is: {total}</p> */}

      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffectComponent /> */}
      <SimpleExample/>
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(1) -- (No need to create the state here done by simple using variables likewise)
  let multipliedValue = value * 5

  const multiplybyfive = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
    <h1>Main value: {value}</h1>
    <button onClick={() => multiplybyfive()}>Click to multiply by 5</button>
    <h2>Multiplied value: {multipliedValue}</h2>
    </>
  )
}

export default App
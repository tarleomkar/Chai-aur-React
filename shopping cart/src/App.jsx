import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Shop from './components/Shop'

const App = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(item);
  }

  return (
    <div>
    <NavBar size={cart.length} />
    <Shop handleClick={handleClick} />
    </div>
  )
}

export default App
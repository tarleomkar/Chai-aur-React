import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Shop from './components/Shop'
import './App.css'

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false)

  const handleClick = (item) => {
    if(cart.some((product) => product.id === item.id)) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000)
      return
    }
    setCart((prevCart) => [...prevCart, item])
  }

  return (
    <div>
    <NavBar size={cart.length} />
    <Shop handleClick={handleClick} />
    {warning && 
    <div className='warning'>
    Item is already present in your Cart  
    </div>}
    </div>
  )
}

export default App
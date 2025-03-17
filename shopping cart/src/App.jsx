import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import './App.css';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    const existingItem = cart.find(product => product.id === item.id);
    if (existingItem) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
    setCart([...cart, { ...item, qty: 1 }]);
  };

  return (
    <div>
      <NavBar size={cart.length} setShow={setShow} />
      {show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />}

      {warning && (
        <div className='warning'>
          Item is already present in your Cart
        </div>
      )}
    </div>
  );
};

export default App;

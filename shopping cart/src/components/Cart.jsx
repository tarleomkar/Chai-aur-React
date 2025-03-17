import React, { useEffect, useState } from 'react';

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(cart.reduce((total, item) => total + item.price * item.qty, 0));
  }, [cart]);

  const increaseQty = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className='cart_box' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => increaseQty(item.id)}>+</button>
              <span>{item.qty}</span>
              <button onClick={() => decreaseQty(item.id)}>-</button>
            </div>
            <div>
              <span>{item.price} Rs</span>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <h3>Total Price: {price} Rs</h3>
    </div>
  );
};

export default Cart;

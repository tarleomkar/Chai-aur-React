import React from "react";
import { ImageOff, ShoppingCart } from 'lucide-react';
import '../styles/navbar.css'

const NavBar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">
          Dxo Shop
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <ShoppingCart />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

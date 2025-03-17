import React from "react";
import { ImageOff, ShoppingCart } from 'lucide-react';
import '../styles/navbar.css'

const NavBar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">
          Dxo Shop
        </span>
        <div className="cart">
          <span>
            <ShoppingCart />
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

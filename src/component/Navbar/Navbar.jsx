import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import card_icon from '../assets/card_icon.png'
  const Navbar = () => {
    return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src ={logo} width={100} height={70} alt = "" />
       </div>
      <ul className="nav-menu">
        <li>shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Electronic</li>
        <li>Bakery Items</li>
        <li>Grocery</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
      </div>
    </div>
  );
}
export default Navbar;
import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png' 
import { Link } from 'react-router-dom';

  const Navbar = () => {
      return (
      <div>
    <div className='navbar'>
      <div className='nav-logo'>
        <img src ={logo} width={70} height={70} alt = "" />
        </div>
        <nav>
      <ul className="nav-menu">
        <li>
          <Link to = "/electronicAppliance">Electronic Appliance Repair</Link>
        </li>
        <li>
          <Link to = "/grocery">Grocery</Link>
        </li>
        <li>
          <Link to = "/doctor">Doctor</Link>
        </li>
        <li>
        <Link to = "/plumber">Plumber</Link></li>
        <li>
        <Link to = "/parlour">Parlour</Link></li>      
        </ul></nav>
        <span>           
        <img className='overlay' src={cart_icon} width={60} height={60} alt = "" /> 0
        </span>
        <button>Login</button>
        <button>Sign Up</button>
        </div>
      <div>
      </div>
      </div>
      );
  }
export default Navbar;
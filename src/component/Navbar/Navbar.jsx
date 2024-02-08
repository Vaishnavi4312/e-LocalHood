import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png' 
  const Navbar = () => {
    const[menu, setMenu] = useState("")
    return (
      <div>
    <div className='navbar'>
      <div className='nav-logo'>
        <img src ={logo} width={70} height={70} alt = "" />
        </div>
      <ul className="nav-menu">
        <li>Electronic Appliance Repair</li>
        <li>Grocery</li>
        <li>Doctor</li>
        <li>Plumber</li>
        <li>Parlour</li>      
        </ul>
        <span>           
        <img className='overlay' src={cart_icon} width={60} height={60} alt = "" /> 0
        </span>
        <button>Login</button>
        <button>Sign Up</button>
       {/* <span> */}
        
        {/* </span> */}
        </div>
      <div>
      </div>
      </div>
    
  );
}
export default Navbar;
import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  const [menu,setmenu]=useState("home");


  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' alt="" />
      <ul className="navbar-menu">
        <li onClick={()=> setmenu('home')} className={menu=="home" ?"active" : ""}>Home</li>
        <li onClick={()=> setmenu('menu')}className={menu=="menu" ?"active" : ""}>Menu</li>
        <li onClick={()=> setmenu('mobile-app')}className={menu=="mobile-app" ?"active" : ""}>Mobile-App</li>
        <li onClick={()=> setmenu('contact-us')}className={menu=="contact-us" ?"active" : ""}>Contact-Us</li>
      </ul>
      <ul className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
        <div className="dot">
        </div>
        </div>
          <button>Sign-in</button>
      </ul>
    </div>
  )
}

export default Navbar
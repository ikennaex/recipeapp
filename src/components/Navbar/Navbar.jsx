import React from 'react'
import { useState } from 'react';
import "./navbar.css";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
    <div className='navbar-div'>
      <ul className='navbar-links'>
      <li><a href='#about'>About</a></li>
      {/* <li><a href='#skills'>Skills</a></li> */}
      <li><a href='#stack'>Stack</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact-me'>Contact me</a></li>
      </ul>
    </div>

    <div className='nav-menu'>
    {toggleMenu 
    ? <RiCloseLine color='#000' size={27} onClick= {() => setToggleMenu(false)} />
    : <RiMenu3Line color='#000' size={27} onClick= {() => setToggleMenu(true)} /> 
    }

    {toggleMenu && (
      <div className='navbar-container scale-up-center'>
      <div className='gpt3-navbar-menu-container-links'>
        <nav>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#stack'>Stack</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact-me'>Contact me</a></li>
          </ul>
        </nav>
        </div>
      </div>
    )}
    </div>

    </div>
  )
}

export default Navbar
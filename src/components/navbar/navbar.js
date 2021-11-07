import React from 'react'
import './navbar.css'

const NavBar = ({ setVisible, visible }) => {
  return (
    <header class="header">
      <nav class="navbar">
        <img src={`${process.env.PUBLIC_URL}/Logo.png`} className="nav-image" alt=""/>
        <p class="contact-button" onClick={() => setVisible(!visible)}><b>contact</b></p>
      </nav>
    </header>
  )
}

export default NavBar
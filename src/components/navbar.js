import React from 'react'
import './navbar.css'

const NavBar = ({ setVisible, visible }) => {
  return (
    <nav class="navbar">
      <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt=""/>
      <p class="contact" onClick={() => setVisible(!visible)}>contact</p>
    </nav>
  )
}

export default NavBar
import './navbar.css'

const NavBar = () => {
  return (
    <nav class="navbar">
      <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt=""/>
      <p class="contact">contact</p>
    </nav>
  )
}

export default NavBar
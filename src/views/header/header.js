import './header.css'

const Header = ({ Text }) => {
  return (
    <section className="header">
    <h2><span className="underline">Header</span> One</h2>
      <Text />
  </section>
  )
}

export default Header
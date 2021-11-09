import './header.css'

const Header = ({ Text, distinctFn }) => {
  return (
    <section className="header">
    <h2><span className="underline">Header</span> One</h2>
      <Text fn={distinctFn}/>
  </section>
  )
}

export default Header
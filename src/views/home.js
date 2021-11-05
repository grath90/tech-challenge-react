import React, { useState } from 'react'
import './home.css'

import Container from './container'
import NavBar from '../components/navbar'
import Header from './header'
import Contact from './contact'

const Home = () => {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      <NavBar setVisible={setVisible} visible={visible}/>
      <section>
        <Container visible={visible}/>
        <Contact visible={!visible}/>
        <Header />
      </section>
    </div>
  )
}

export default Home
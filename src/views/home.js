import React, { useState } from 'react'
import './home.css'

import Container from './container'
import NavBar from '../components/navbar'
import Header from './header'
import Contact from './contact'

const MainText = () =>
<p>
  Remove the duplicates in 2 Javascript objects and output the
  list of distinct names in an unordered list when <a href="_target">this link </a>
  is clicked. If the Operation has been completed already notify the user this has already been done.
</p>

const ContactText = () =>
<p>
  Lorem ipsum dolar sit amet, consectetur adipiscing elit,
  sed do dos eiusmod tempor incididunt ut labore et
  trace dolore magna aliqua.

  Proin sagittis nisl rhoncus mattis rhoncus. At augue eget
  arcu distum varius duis at consectetur lorem.
</p>

const Home = () => {
  const [visible, setVisible] = useState(true)
  return (
    <div className={visible ? 'home-view' : 'contact-view'}>
      <NavBar setVisible={setVisible} visible={visible}/>
      <section>
      {
        visible 
        ?
          <>
            <Container />
            <Header Text={MainText}/>
          </>
        :
          <Contact Text={ContactText} visible={visible}/>
      }
      </section>
    </div>
  )
}

export default Home
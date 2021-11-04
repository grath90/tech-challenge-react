import React from 'react'
import './home.css'
import Box from '../components/box'
import NavBar from '../components/navbar'

const Home = () => {
  return (
    <div>
      <NavBar />
      <section className="container">
        <Box image="Talkie.png" />
        <Box image="Rabbit.png" />
        <Box image="Shield.png" />
      </section>
      <section>
        <h2><span class="underline">Header</span> One</h2>
        <p>
          Remove the duplicates in 2 Javascript objects and output the
          list of distinct names in an unordered list when <a>this link </a>
          is clicked. If the Operation has been completed already notify the user this has already been done.
        </p>
      </section>
    </div>
  )
}

export default Home
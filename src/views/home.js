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
    </div>
  )
}

export default Home
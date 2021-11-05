import React from 'react'
import Box from '../components/box'
import './container.css'

const Container = ({ visible }) => {
  return (
    <span>
      {
        visible
        ?
          <section className="container">
            <Box image="Talkie.png" />
            <Box image="Rabbit.png" />
            <Box image="Shield.png" />
          </section>
        :
          <span />
      }
    </span>
  )
}

export default Container
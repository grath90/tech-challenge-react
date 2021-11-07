import React from 'react'
import './box.css'

const Box = (props) => {
  return (
    <div className="box">
      <img src={`${process.env.PUBLIC_URL}/${props.image}`} className="center" alt=""/>
        <h3>Heading Two</h3>
        <p className="box-text">
          Lorem ipsum dolar sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore
        </p>
        <button>
          Learn More
        </button>
    </div>
  )
}

export default Box
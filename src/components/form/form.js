import React, { useState } from 'react'
import './form.css'

const Form = () => {
  const [emailClass, setEmailClass] = useState('email')
  const onSubmit = () => {
    const input = document.getElementById("email")
    input.addEventListener(
      "invalid",
      event => {
        setEmailClass('email error')
      },
      false
    )
    console.log(input)
  }

  return (
    <form className="form">
      <h3 className="contact-header">Heading Two</h3>
      <input type="text" name="fname" className="fname" placeholder="First Name"/>
      <input type="text" name="lname" className="lname" placeholder="Last Name" />
      <input type="text" name="title" className="title" placeholder="Title" />
      <input type="text" name="email" className={emailClass} id="email" placeholder="Email" required />
      <textarea type="text" name="message" className="message" rows="4" cols="50" placeholder="Message" />
      <button className="button" onClick={onSubmit}>Submit</button>
    </form>
  )
}

export default Form
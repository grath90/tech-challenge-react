import React, { useState } from 'react'
import './form.css'

const Form = () => {
  const [emailClass, setEmailClass] = useState('email')
  const [showEmailError, setShowEmailError] = useState(false)
  const [email, setEmail] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      setEmailClass('email error')
      setShowEmailError(true)
    }
  }

  return (
    <>
      <form className="form">
        <h3 className="contact-header">Heading Two</h3>
        <input type="text" name="fname" className="fname" placeholder="First Name"/>
        <input type="text" name="lname" className="lname" placeholder="Last Name" />
        <input type="text" name="title" className="title" placeholder="Title" />
        <span class="emailContainer">
          <input type="text" name="email" className={emailClass} id="email" placeholder="Email" value={email} onChange={setEmail} />
          {
            showEmailError
            ?
            <div className="errorMessage">Required</div>
            :
            <></>
          }
        </span>
        <textarea type="text" name="message" className="message" rows="4" cols="50" placeholder="Message" />
      </form>
      <button className="button" onClick={(e) => onSubmit(e)}>Submit</button>
    </>
  )
}

export default Form
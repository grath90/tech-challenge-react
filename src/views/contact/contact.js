import React from 'react'
import './contact.css'
import Header from '../header/header'
import Form from '../../components/form/form'

const Contact = ({ Text }) => {
  return (
    <div className="contact">
    <section className="contact-header-section">
      <Header Text={Text}/>
    </section>
    <section className="contact-form-section">
      <Form />
    </section>
  </div>
  )
}

export default Contact
import './form.css'

const Form = () => {
  return (
    <form className="form">
      <h3 className="contact-header">Heading Two</h3>
      <input type="text" name="fname" className="fname" placeholder="First Name"/>
      <input type="text" name="lname" className="lname" placeholder="Last Name" />
      <input type="text" name="title" className="title" placeholder="Email" />
      <input type="text" name="email" className="email" placeholder="Email" required />
      <textarea type="text" name="message" className="message" rows="4" cols="50" placeholder="Message" />
      <button className="button">Submit</button>
    </form>
  )
}

export default Form
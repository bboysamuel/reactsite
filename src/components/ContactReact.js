import React, {useState, useEffect} from "react"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"
import axios from "axios"
import Aos from "aos"
import "aos/dist/aos.css"

const ContactReact = () => {
  useEffect(() => {
    Aos.init({duration: 2500})
  }, [])

  const [name, setName ] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const  [messageBody, setMessageBody] = useState('')
  // const  [agreeTOS, setAgreeTOS]  = useState(true)
  // const [ state, setState] = useState()

  const resetForm = async () => {


        setName('')
        setEmail('')
        setSubject('')
        setMessageBody('')
  }

  const handleEmail = async (event) => {
    event.preventDefault()

    try {

      const data = {
        name,
        email,
        subject,
        messageBody,

      }

      const response = await axios.post('/api/emailForm', data)

      // console.log('response fired', response)

      if(response) {
        resetForm()
      }

    } catch (error) {
      console.error(error)
    }

  }


  return(<>
    <section className="mb-4 safe" id="contactTop">

<h2 className="h1-responsive font-weight-bold text-center my-4">Contact</h2>

<p className="text-center w-responsive mx-auto mb-5">Got questions? Great, Sam's got answers. They may not be correct answers, but he tries. </p>


</section>

  <div data-aos="fade-up" className="contactWrapper">
<Form onSubmit={handleEmail}>
<Form.Group  controlId="formGridAddress1">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      value={name}
     onChange={ (e) => {
      // e.preventDefault()
      console.log(e.target.value)
      setName(e.target.value)


    }} placeholder="Your Name" />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control
    type="email"
    value={email}
    placeholder="Your Email"
    onChange={ (e) => {
      console.log(e.target.value)
      setEmail(e.target.value)
    }}
    />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Subject</Form.Label>
    <Form.Control
    placeholder="Subject"
    type="text"
    value={subject}
    onChange={ (e) => {
      console.log(e.target.value)
      setSubject(e.target.value)
    }}
    />
  </Form.Group>


  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control
    type="text"
    value={messageBody}
    as="textarea"
    placeholder="Your message"
    rows={3}
    onChange={ (e) => {
      console.log(e.target.value)
      setMessageBody(e.target.value)
    }}
    />
  </Form.Group>

  <Form.Group id="formGridCheckbox">
    <p style={{fontSize: ".75rem"}}> By submitting you agree to the terms of service & privacy policy </p>
  </Form.Group>

  <Button onClick={ (e) => {
    }} variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  </>)
}

export default ContactReact

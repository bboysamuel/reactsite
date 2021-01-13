import React, {useState, useEffect} from "react"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"

const ContactReact = () => {

  const [name, setName ] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const  [messageBody, setMessageBody] = useState('')
  const  [agreeTOS, setAgreeTOS]  = useState(true)

  const handleEmail = () => {



    console('email submitted')
  }


  return(<>
  <div className="contactWrapper">
<Form>
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

  {/* <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row> */}


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
    <Form.Check type="checkbox"
    label="By submitting I agree to the site's terms of service & privacy policy" />

  </Form.Group>

  <Button onClick={ (e) => {
    e.preventDefault()
      console.log('test submit click')
    }} variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  </>)
}

export default ContactReact

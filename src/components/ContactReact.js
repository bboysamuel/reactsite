import React from "react"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"

const ContactReact = () => {

  return(<>
<Form>
<Form.Group controlId="formGridAddress1">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Your Name" />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Your Email" />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="Subject" />
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
    <Form.Control as="textarea" placeholder="Your message"  rows={3} />
  </Form.Group>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox"
    label="I agree to the TOS & privacy policy" />

  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

  </>)
}

export default ContactReact

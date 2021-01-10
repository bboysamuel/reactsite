

import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const LogoImages = () => {

  return (<>
  <Container>
  <Row>
    <Col xs={3} md={2}>
      <Image src="media/inevifit.jpg" thumbnail />
    </Col>
    <Col xs={3} md={2}>
      <Image src="media/inevifit.jpg" thumbnail />
    </Col>
    <Col xs={3} md={2}>
      <Image src="media/inevifit.jpg" thumbnail />
    </Col>
    <Col xs={3} md={2}>
      <Image src="media/inevifit.jpg" thumbnail />
    </Col>
    <Col xs={3} md={2}>
      <Image src="media/inevifit.jpg" thumbnail />
    </Col>
    <Col xs={3} md={2}>
      <Image src="media/inevifit.jpg" thumbnail />
    </Col>
  </Row>
</Container>
  </>)
}

export default LogoImages

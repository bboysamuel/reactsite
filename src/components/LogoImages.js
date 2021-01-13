

import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const LogoImages = () => {

  return (<>
  <div className="logoWrapper">
  <Container className="justify-content-md-center">
  <Row className="justify-content-md-center">
    <Col xs={2} md={2} lg={2}>
      <Image className="logoImg" src="media/logos/reactjs-javascript-react-js-2.png" thumbnail />
    </Col>
    <Col xs={2} md={2} lg={2}>
      <Image className="logoImg" src="media/logos/css-css3-cascading-style-sheet" thumbnail />
    </Col>
    <Col xs={2} md={2} lg={2}>
      <Image className="logoImg" src="media/logos/sql-postgresql" thumbnail />
    </Col>
    <Col xs={2} md={2} lg={2}>
      <Image className="logoImg" src="media/logos/node-nodejs" thumbnail />
    </Col>
    </Row>

    <Row className="justify-content-md-center">

    <Col xs={2} md={2} lg={2}>
      <Image className="logoImg" src="media/logos/javascript-software-developer-web-apps.png" thumbnail />
    </Col>
    <Col xs={2} md={2} lg={2}>
      <Image className="logoImg" src="media/logos/html-html5" thumbnail />
    </Col>
    <Col xs={2} md={2} lg={2}>
      <Image className="logoImg" src="media/logos/jquery-javascript-library.png" thumbnail />
    </Col>
    <Col xs={2} md={2} lg={2}>
      <Image className="logoImg" src="media/logos/wordpress-wp-php" thumbnail />
    </Col>
  </Row>
</Container>
</div>
  </>)
}

export default LogoImages

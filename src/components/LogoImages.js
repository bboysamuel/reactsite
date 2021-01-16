

import React, {useEffect} from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Aos from "aos"
import "aos/dist/aos.css";




const LogoImages = () => {
  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (<>
  <div className="logoWrapper">
  <Container className="justify-content-md-center">
  <Row data-aos="fade-right" className="justify-content-md-center logoRow">
    <Col className="logoCols" xs={3} md={2} lg={2} xl={2}>
      <Image className="logoImg" src="media/logos/reactjs-javascript-react-js-2.png" thumbnail onClick={() => {
      window.location.href = "https://reactjs.org/"
    }} />
    </Col>
    <Col xs={3} md={2} lg={2} xl={2} >
      <Image className="logoImg" src="media/logos/css-css3-cascading-style-sheet" thumbnail onClick={ () => {
        window.location.href="https://developer.mozilla.org/en-US/docs/Web/CSS"
      }}/>
    </Col>
    <Col xs={3} md={2} lg={2} xl={2}>
      <Image className="logoImg" src="media/logos/sql-postgresql" thumbnail onClick={ () => {
        window.location.href="https://www.postgresql.org/"
      }} />
    </Col>
    <Col xs={3} md={2} lg={2} xl={2}>
      <Image className="logoImg" src="media/logos/node-nodejs" thumbnail onClick={ () => {
        window.location.href="https://nodejs.org/en/about/"
      }} />
    </Col>
    </Row>

    <Row data-aos="fade-left" className="justify-content-md-center logoRow">

    <Col xs={3} md={2} lg={2} xl={2}>
      <Image className="logoImg" src="media/logos/javascript-software-developer-web-apps.png" thumbnail onClick={ () => {
        window.location.href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" }}/>
    </Col>
    <Col xs={3} md={2} lg={2} xl={2}>
      <Image className="logoImg" src="media/logos/html-html5" thumbnail onClick={ () => {
        window.location.href="https://en.wikipedia.org/wiki/HTML"
      }} />
    </Col>
    <Col xs={3} md={2} lg={2} xl={2}>
      <Image className="logoImg" src="media/logos/jquery-javascript-library.png" thumbnail onClick={ () => {
        window.location.href="https://jquery.com/"
      }} />
    </Col>
    <Col xs={3} md={2} lg={2} xl={2}>
      <Image className="logoImg" src="media/logos/wordpress-wp-php" thumbnail onClick={ () => {
        window.location.href="https://wordpress.org/"
      }} />
    </Col>
  </Row>

  <Row data-aos="fade-right" className="justify-content-md-center logoRow">

<Col xs={3} md={2} lg={2} xl={2}>
  <Image className="logoImg" src="media/logos/moz-seo-search-engine-optimization.png" thumbnail onClick={ () => {
    window.location.href="https://moz.com/about" }}/>
</Col>
<Col xs={3} md={2} lg={2} xl={2}>
  <Image className="logoImg" src="media/logos/GitHub-web-design-developer-tools.png" thumbnail onClick={ () => {
    window.location.href="https://github.com/"
  }} />
</Col>
<Col xs={3} md={2} lg={2} xl={2}>
  <Image className="logoImg" src="media/logos/google-analytics-ga-seo" thumbnail onClick={ () => {
    window.location.href="https://analytics.google.com/analytics/academy/"
  }} />
</Col>
<Col xs={3} md={2} lg={2} xl={2}>
  <Image className="logoImg" src="media/logos/cpanel-whm-hosting" thumbnail onClick={ () => {
    window.location.href="https://cpanel.net/"
  }} />
</Col>
</Row>

</Container>
</div>
  </>)
}

export default LogoImages

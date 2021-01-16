

import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import {FaTwitterSquare, FaFacebookSquare, FaLinkedin, FaGithubSquare, FaImdb, FaYoutubeSquare, FaVimeoSquare, FaMedium} from "react-icons/fa"
import {MdCode} from "react-icons/md"



const SocialContacts = () => {

  return (<>
<div className="centerWrap" >
  <Container style={{color: "white"}} >
  <Row>
<Col>
    {/* <FaFacebookSquare className="socialLink" onClick={() => {
      window.location.href = "https://facebook.com/sammckaigconsulting"

    }} size="2rem" /> */}

    <FaGithubSquare className="socialLink" onClick={() => {
      window.location.href = "https://github.com/bboysamuel"

    }} size="2rem" />

    <FaImdb className="socialLink" onClick={() => {
      window.location.href = "https://www.imdb.com/name/nm6350143/"

    }} size="2rem" />



    <FaLinkedin className="socialLink" onClick={() => {
      window.location.href = "https://www.linkedin.com/in/sammckaig/"

    }} size="2rem" />



    <FaYoutubeSquare className="socialLink" onClick={() => {
      window.location.href = "https://www.youtube.com/channel/UChppwzSZ7iHqNORZROxGC5w/about"

    }} size="2rem" />

    <FaTwitterSquare className="socialLink" onClick={() => {
      window.location.href="https://twitter.com/samuelmckaig"
    }} size="2rem" />

</Col>

  </Row>
</Container>
</div>
  </>)
}

export default SocialContacts

import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const NavTop = (props) => {

  return (<>
  <div>
  <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor: "black"}}
 variant="dark"
  >
  <Navbar.Brand href="/">SAMUEL MCKAIG  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#aboutTop">ABOUT</Nav.Link>
      <Nav.Link href="#contactTop">CONTACT</Nav.Link> */}
    </Nav>
    <Nav>
      <Nav.Link href="#home"> HOME</Nav.Link>
    <Nav.Link href="#aboutTop">ABOUT</Nav.Link>
      <Nav.Link href="#projectsTop">PROJECTS</Nav.Link>
      <Nav.Link href="#contactTop">CONTACT</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
</>)

}

export default NavTop

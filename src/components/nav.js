import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const NavTop = (props) => {

  return (<Navbar collapseOnSelect expand="lg" sticky="top" style={{backgroundColor: "black"}}
 variant="dark"
  >
  <Navbar.Brand href="/">SAMUEL MCKAIG | official website </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#aboutTop">ABOUT</Nav.Link>
      <Nav.Link href="#projectsTop">PROJECTS</Nav.Link>
      <Nav.Link href="#contactTop">CONTACT</Nav.Link> */}
    </Nav>
    <Nav>
      <Nav.Link href="#home"> HOME</Nav.Link>
    <Nav.Link href="#aboutTop">ABOUT</Nav.Link>
      <Nav.Link href="#projectsTop">PROJECTS</Nav.Link>
      <Nav.Link href="#contactTop">CONTACT</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>)



//   return <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
//   <div class="container">
//     <a class="navbar-brand" href="/">Samuel McKaig | Official Website</a>
//     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarResponsive">
//       <ul class="navbar-nav ml-auto">
//         <li class="nav-item">
//           <a class="nav-link" href="#aboutTop">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#projectsTop">Projects</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#contactTop">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
}

export default NavTop

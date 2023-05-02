import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

export default function MyNavbar() {
  return (
    <div>      
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

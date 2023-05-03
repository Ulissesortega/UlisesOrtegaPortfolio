import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MyNavbar() {
  return (
    <div>      
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="#home" as={Link} to='/'>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/About'>About</Nav.Link>
            <Nav.Link as={Link} to='/Skills'>Skills</Nav.Link>
            <Nav.Link as={Link} to='/Projects'>Projects</Nav.Link>
            <Nav.Link as={Link} to='/Contact'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

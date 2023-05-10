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
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>HOME</Nav.Link>
            <Nav.Link as={Link} to='/About'>ABOUT</Nav.Link>
            <Nav.Link as={Link} to='/Skills'>SKILLS</Nav.Link>
            <Nav.Link as={Link} to='/Projects'>PROJECTS</Nav.Link>
            <Nav.Link as={Link} to='/Contact'>CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

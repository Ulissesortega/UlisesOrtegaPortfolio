import React from 'react'
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./MyNavbar";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, useLocation } from 'react-router-dom';

export default function Skills() {
  return (
    <div className="bgimage">
      <Navbar />
      <Container>
        <Row>
          <Col>
            <p className="title-format title-location">Skills</p>
          </Col>
        </Row>

        <Row>
          <Col lg={2}>
            <a href="https://www.w3schools.com/html/" target="_blank">
              <img className='imgloc br' src={require('../Assets/html.png')} width="100" height="100" />
            </a>
          </Col>

          <Col lg={2}>
            <img className='imgloc br' src={require('../Assets/css.png')} width="100" height="100" />
          </Col>

          <Col lg={2}>
            <img className='imgloc br' src={require('../Assets/bootstrap.png')} width="100" height="100" />
          </Col>

          <Col lg={2}>
            <img className='imgloc br' src={require('../Assets/tailwind.png')} width="100" height="100" />
          </Col>

          <Col lg={2}>
            <img className='imgloc br' src={require('../Assets/Javascript.png')} width="100" height="100" />
          </Col>



        </Row>



        <Row className='mt-5'>
          <Col>
            <Link to="/About">
              <Button className="rounded-pill under-title-loc font-italic">About Me</Button>
            </Link>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

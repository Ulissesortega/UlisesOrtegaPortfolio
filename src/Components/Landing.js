import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./MyNavbar";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Landing() {
  return (
    <div className="bgimage">
      <Navbar />
      <Container>
        <Row>
          <Col>
            <p className="title-format title-location">Ulises Ortega</p>
            <p className="under-title under-title-loc">Jr. Web Developer</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <img className='img-fluid imgformatlocation' src={require('../Assets/Photo.png')} alt="Logo" width={350} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Link to="/About">
              <Button className="rounded-pill under-title-loc font-italic">About Me</Button>
            </Link>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

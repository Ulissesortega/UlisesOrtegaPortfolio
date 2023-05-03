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
            <Button className="rounded-pill under-title-loc font-italic" onClick={()=> alert('It works')}>About Me</Button>
          </Col>     
        </Row>    

      </Container>
    </div>
  );
}

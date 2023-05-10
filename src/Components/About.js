import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./MyNavbar";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, useLocation } from 'react-router-dom';


export default function About() {

  return (
    <div className="bgimage">
      <Navbar />
      <Container>
        <Row>
          <Col>
            <p className="title-format title-location">About Me!</p>
            <p className="under-title under-title-loc text-white">I'm a Front-End Web Developer with a background in 3D design, 
              technical support for computers<br/> software and hardware.<br/><br/>
              My previous years of experience have giving me a strong foundation for Web Development,<br/>
              I gratuated from <span className="under-title">CodeStack Academy's immersive Web Development program.</span>
              <br/>
              <br/>
              I'm pasitionate about coding and bringing creatiave solutions through code, <br/> As challenging as it could be, I love the learning challenge!   
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Link to="/Skills">
              <Button className="rounded-pill under-title-loc font-italic">My Skills</Button>
            </Link>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

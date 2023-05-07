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
      <Row>
        <Col>
          <p>Skills Component</p>
          
        </Col>
      </Row>
    </div>
  );
}

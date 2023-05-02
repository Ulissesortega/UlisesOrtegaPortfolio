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
        <h1>Ulises Ortega</h1>
      </Container>
    </div>
  );
}

import Headertra from "../translateComp/Headertra";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './style.css';



function Headerapp() {
    return (
      <React.Fragment>

        <Navbar bg="transparent" variant="light">
          <Container>
          
            <Nav className="me-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <div>
              <Headertra />
            </div>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
  
  export default Headerapp;
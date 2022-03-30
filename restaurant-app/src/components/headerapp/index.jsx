import Headertra from "../translateComp/Headertra";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./style.scss";
import { Col } from "react-bootstrap";
import ThemingSelector from "../themimg-selector";
import { ThemingContext } from "../themimg-selector/theming.context";
import { useContext } from "react";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import logo2 from './../../assets/img/logo2.jpeg'
import ModalReg from "../modalRegister";
import ModalLog from "../modalLogin";
import {AiOutlineLogout} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";








function Headerapp() {
  const [t, i18n] = useTranslation("global");

  const [theming, changecolor] = useContext(ThemingContext);
  const navigate = useNavigate();
  const handleDelete = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <React.Fragment>
      <Navbar bg={theming.primary.color} variant="dark">
        <Navbar.Brand>
          <img alt="" src={logo2} width="250" height="80" />
        </Navbar.Brand>
        <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="d-flex justify-content-end">
<Row>
  <Col>
  <Container>
            <Form.Check
              onClick={changecolor}
              type="switch"
              id="custom-switch"
              label={t("header.switch")}
              className="text-success"
            />   
          </Container>
          <Container>
          <ModalReg />
          <ModalLog /> 
          <Button className={`text-${theming.typography.color}`}
         
         style={{ width: "40px",height:"38px" }} type="submit" border={`${theming.secondary.color}`} onClick={handleDelete}>{<AiOutlineLogout />} </Button>
         <Headertra />

          </Container>
          {/* <Container>
          <Headertra />
          

          </Container> */}


  </Col>
</Row>


          


          

          
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Headerapp;

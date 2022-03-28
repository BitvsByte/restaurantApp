import Headertra from "../translateComp/Headertra";
import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

import { Col } from "react-bootstrap";
import ThemingSelector from "../themimg-selector";
import { ThemingContext } from "../themimg-selector/theming.context";
import { useContext } from "react";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import logo2 from './../../assets/img/logo2.jpeg'
import ModalReg from "../modalRegister";
import ModalLog from "../modalLogin";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaRegUserCircle} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";






function Headerappdos() {
  const [t, i18n] = useTranslation("global");

  const [theming, changecolor] = useContext(ThemingContext);
  const navigate = useNavigate();

 


  return (
    <React.Fragment>

      <Navbar bg={theming.primary.color} variant="dark">
        
          <Navbar.Brand><img alt="" src={logo2} width="250" height="80" /></Navbar.Brand>
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
              className= {`text-${theming.typography.color}`}
            />   
          </Container>

          <Container>
          <Headertra />

          </Container>
          <Container>
          <Link to="/perfil"><FaRegUserCircle className="hola" style={{width:'30px',height:'30px'}} /></Link>

          </Container>

  </Col>
</Row>

          </Navbar.Collapse>
        
      </Navbar>
    </React.Fragment>
  );
}

export default Headerappdos;

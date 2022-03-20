import Headertra from "../translateComp/Headertra";
import React from "react";
import { Navbar } from "react-bootstrap";
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





function Headerappdos() {
  const [t, i18n] = useTranslation("global");

  const [theming, changecolor] = useContext(ThemingContext);


  return (
    <React.Fragment>

      <Navbar bg={theming.primary.color} variant="dark">
        
          <Navbar.Brand><img alt="" src={logo2} width="250" height="80" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="d-flex justify-content-end">
            <Navbar.Text>


      
            </Navbar.Text>
          </Navbar.Collapse>
        
      </Navbar>
    </React.Fragment>
  );
}

export default Headerappdos;

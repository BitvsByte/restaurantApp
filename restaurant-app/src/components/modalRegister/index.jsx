import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { useTranslation } from "react-i18next"; 
import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {GiArchiveRegister} from 'react-icons/gi'
import './style.scss'
import {useContext} from 'react'
import {ThemingContext} from "./../themimg-selector/theming.context";
import { useNavigate } from 'react-router-dom';
import {AiOutlineForm} from 'react-icons/ai'



function ModalReg() {
  const [t] = useTranslation("global");
  const [show, setShow] = useState(false);
  const [theming] = useContext(ThemingContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, usersUpdate] = useState([])
  const navigate = useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    usersUpdate(userData);

    fetch("http://localhost:4000/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    })
      .then((d) => d.json())
      .then((data) => {
        usersUpdate(...users, userData);
        console.log(data);
      });

   
   navigate("/");
  };

  return (
    <React.Fragment>
      <Button  border={`${theming.secondary.color}`} className={`text-${theming.typography.color}`} style={{width:"40px"}} onClick={handleShow}>
        {<AiOutlineForm />}
      </Button>


      <Modal show={show} onHide={handleClose} animation={true} className="modal_container">

        <Modal.Header closeButton className="header_color">
        <Modal.Title>{t("header.registro")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="hola" >
        <Form onSubmit={handleSubmit} Validate  style={{width:"400px",height:"500px"}} autocomplete="off" >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={`text-${theming.typography.color}`}>{t("header.name")}</Form.Label>
              <Form.Control className="bg-secondary  shadow rounded zoom"  style={{width:"400px"}} type="text" name="name" placeholder={t("header.nameplace")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={`text-${theming.typography.color}`}>{t("header.lastname")}</Form.Label>
              <Form.Control className="bg-secondary  shadow rounded zoom" style={{width:"400px"}} type="text" name="lastname" placeholder={t("header.lastnameplace")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={`text-${theming.typography.color}`}>{t("header.username")}</Form.Label>
              <Form.Control className="bg-secondary  shadow rounded zoom" style={{width:"400px"}} type="text" name="username" placeholder={t("header.usernameplace")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={`text-${theming.typography.color}`}>{t("header.email")}</Form.Label>
              <Form.Control className="bg-secondary shadow rounded zoom" style={{width:"400px"}} type="mail" name="email" placeholder={t("header.mailplace")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={`text-${theming.typography.color}`}>{t("header.password")}</Form.Label>
              <Form.Control className="bg-secondary shadow rounded zoom"  style={{width:"400px"}} type="password" name="password" placeholder={t("header.passwordplace")} />
            </Form.Group>
            <Button variant="secondary" type="submit">{t("header.send")}</Button>
          </Form>
          
          <Modal.Footer>
          <Modal.Title className="text-small">{t("header.comprobar")}</Modal.Title>
        </Modal.Footer>
            

        </Modal.Body>
  



        
      </Modal>
    </React.Fragment>
  );
}
  
  export default ModalReg;
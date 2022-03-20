import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { useTranslation } from "react-i18next"; 
import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


function ModalReg() {
  const [t, i18n] = useTranslation("global");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, usersUpdate] = useState([])

  const handleSubmit = e => {
      e.preventDefault()
      const userData = {
          name: e.target.name.value,
          lastname: e.target.lastname.value,
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,

      }

      usersUpdate(userData)

      fetch('http://localhost:4000/auth/register', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: { 'Content-Type': 'application/json' }
      })

          .then(d => d.json())
          .then((data) => {
              usersUpdate(...users, userData)
              console.log(data)
          })

  }

  return (
    <React.Fragment>
      <Button variant="secondary" style={{width:"70px"}} onClick={handleShow}>
        {t("header.boton")}
      </Button>


      <Modal show={show} onHide={handleClose} animation={true}>

        <Modal.Header closeButton>
        <Modal.Title>{t("header.registro")}</Modal.Title>
        </Modal.Header>
        <Container >
        <Form onSubmit={handleSubmit} noValidate  style={{width:"400px",height:"500px"}} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t("header.name")}</Form.Label>
              <Form.Control className="bg-success shadow rounded"  style={{width:"300px"}} type="text" name="name" placeholder={t("header.nameplace")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t("header.lastname")}</Form.Label>
              <Form.Control className="bg-success shadow rounded" style={{width:"300px"}} type="text" name="lastname" placeholder={t("header.lastnameplace")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t("header.username")}</Form.Label>
              <Form.Control className="bg-success shadow rounded" style={{width:"300px"}} type="text" name="username" placeholder={t("header.usernameplace")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t("header.email")}</Form.Label>
              <Form.Control className="bg-success shadow rounded" style={{width:"300px"}} type="mail" name="email" placeholder={t("header.mailplace")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t("header.password")}</Form.Label>
              <Form.Control className="bg-success shadow rounded"  style={{width:"300px"}} type="password" name="password" placeholder={t("header.passwordplace")} />
            </Form.Group>
            <Button variant="success" type="submit">{t("header.send")}</Button>
          </Form>
          <Modal.Title>{t("header.comprobar")}</Modal.Title>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          {t("header.cerrar")}
          </Button>
         
        </Modal.Footer>
            

        </Container>
  



        
      </Modal>
    </React.Fragment>
  );
}
  
  export default ModalReg;
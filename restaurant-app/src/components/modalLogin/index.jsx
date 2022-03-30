import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { useTranslation } from "react-i18next"; 
import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {useContext} from 'react'
import {ThemingContext} from "./../themimg-selector/theming.context";
import { useNavigate } from 'react-router-dom';
import './style.scss'
import {BiLogIn} from 'react-icons/bi'


function ModalLog() {
  const [t, i18n] = useTranslation("global");
  const [theming, updateTheming, logName, setLogName] = useContext(ThemingContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [users, usersUpdate] = useState([]);
  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    // console.log(user)

    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((d) => d.json())
      .then((data) => {
        fetch("http://localhost:4000/users", {
          method: "GET",
          headers: { Authorization: `Bearer ${data.access_token}` },
        })
          .then((r) => r.json())
          .then((info) => {
            setLogName(info);
            console.log(info);
            localStorage.setItem("token", data.access_token);

            navigate("/reservas");
          });
        console.log(data.access_token);
      });

      
    


    // 
  };

  return (
    <React.Fragment>
      <Button
      className={`text-${theming.typography.color}`}
      border={`${theming.secondary.color}`}
         
        style={{ width: "40px" }}
        onClick={handleShow}
      >
        {<BiLogIn />}
      </Button>

      <Modal show={show} onHide={handleClose} animation={true} className="modal_container">
        <Modal.Header className="header_color"><Modal.Title>{t("header.log")}</Modal.Title></Modal.Header>
        <Modal.Body className="body_container">
          <Form
            onSubmit={handleOnSubmit}
            Validate
            style={{ width: "400px", height: "300px" }} autocomplete="off"
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={`text-${theming.typography.color}`}>{t("header.mail")}</Form.Label>
              <Form.Control
                className="bg-secondary shadow rounded zoom"
                style={{ width: "300px" }}
                type="email"
                name="email"
                placeholder={t("header.mailplace")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={`text-${theming.typography.color}`}>{t("header.password")}</Form.Label>
              <Form.Control
                className="bg-secondary shadow rounded zoom"
                style={{ width: "300px" }}
                type="password"
                name="password"
                placeholder={t("header.passwordplace")}
              />
            </Form.Group>
            <Button type="submit">
              {t("header.enter")}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Title className="text-small">{t("header.succesfull")}</Modal.Title>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ModalLog;
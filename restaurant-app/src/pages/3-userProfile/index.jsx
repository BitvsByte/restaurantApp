import { useState,useEffect } from "react"
import {ThemingContext} from './../../components/themimg-selector/theming.context'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"

import { Button } from "react-bootstrap"
import Headerapp from "../../components/headerapp"
import Footer from "../../components/footer"
import Container from "react-bootstrap/Container"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.scss'
import {FiTrash2} from 'react-icons/fi'
import Card from 'react-bootstrap/Card'
import agenda from '../../assets/img/agendatope.jpg'
import {IoIosSend} from 'react-icons/io'
import perfil from '../../assets/img/holaperfil.jpg'


import { useTranslation } from "react-i18next";






function Perfil() {
  const [theming, updateTheming] = useContext(ThemingContext);

  let [user, updateUser] = useState([]);
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    fetch("http://localhost:4000/users", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((info) => {
        updateUser(info);
        console.log(info);
      });
  }, []);

  const handleDelete = () => {
    fetch("http://localhost:4000/users", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((j) => j.json())
      .then((data) => {
        console.log(data);
      });

    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <React.Fragment>
      <Headerapp />
      <Container fluid className="contenedor_profil">
        <Row>
          <Col xl={{ span: 5, offset: 4 }}>
            <Card style={{ width: "25rem" }} className="card_container">
              <Card.Img
                variant="top"
                src={perfil}
                style={{ width: "25rem", height: "15rem" }}
              />
              <Card.Header>
                <Card.Title className={`mb-1 text-${theming.reservas.color}`}>
                  Bienvenido a su perfil de usuario
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  Validate
                  className="contenedor"
                  onSubmit={handleDelete}
                  autocomplete="off"
                >
                  <Form.Group
                    className={`mb-1 text-${theming.reservas.color}`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label id="label">{t("header.name")}</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-1"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="input_btn"
                      style={{ width: "20rem" }}
                      type="text"
                      name="name"
                      placeholder={user.name}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className={`mb-1 text-${theming.reservas.color}`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label id="label">{t("header.lastname")}</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-1"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="input_btn"
                      style={{ width: "20rem" }}
                      type="text"
                      name="text"
                      placeholder={user.lastname}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className={`mb-1 text-${theming.reservas.color}`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label id="label">{t("header.username")}</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-1"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="input_btn"
                      style={{ width: "20rem" }}
                      type="text"
                      name="text"
                      placeholder={user.username}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className={`mb-1 text-${theming.reservas.color}`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label id="label">{t("header.mail")}</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="input_btn"
                      style={{ width: "20rem" }}
                      type="number"
                      name="number"
                      min="1"
                      max="80"
                      placeholder={user.email}
                      required
                    />
                  </Form.Group>

                  <Button type="submit">{<FiTrash2 />}</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}


export default Perfil;
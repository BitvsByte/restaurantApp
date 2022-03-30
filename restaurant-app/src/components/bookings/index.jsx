import Container from 'react-bootstrap/Container';
import React, {useState} from 'react';
import Row from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col';
import './style.scss'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import ClockAnimation from '../clockanimation';
import { Card } from 'react-bootstrap';
import agenda from '../../assets/img/agendatope.jpg'
import {IoIosSend} from 'react-icons/io'
import { useContext } from "react";
import { ThemingContext } from "../themimg-selector/theming.context";
import { useTranslation } from "react-i18next";







function BookingCalendar() {
  const [booking,upDateBooking] = useState([])
  const bookingToken = localStorage.getItem('token')
  const navigate = useNavigate()
  const [t, i18n] = useTranslation("global");
  const [theming, changecolor] = useContext(ThemingContext);
  


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const BookingCalendar = {
      date: e.target.date.value,
      time: e.target.time.value,
      name: e.target.name.value,
      diners:e.target.number.value,
    };
    upDateBooking(BookingCalendar);

    fetch("http://localhost:4000/booking", {
      method: "POST",
      body: JSON.stringify(BookingCalendar),
      headers: { "Content-Type": "application/json",Authorization: `Bearer ${bookingToken}` },
      
    })
      .then((d) => d.json())
      .then((data) => {
        upDateBooking(...booking, BookingCalendar);
        console.log(data);

      });
      setTimeout(
        ()=>{
            navigate("/pedido");
        }, 4500
    );

      
  };

  const handleDelete = () => {
    fetch("http://localhost:4000/booking", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${bookingToken}` },
    })
      .then((j) => j.json())
      .then((data) => {
        console.log(data);
      });


  };







  return (
    <React.Fragment>
      
 
   

      

      <Container fluid className="contenedor_padre">
        <Row>
          <Col xl={{ span: 9, offset: 3 }}>
          <Card style={{ width: '30rem' }} className="card_container">
  <Card.Img variant="top" src={agenda} style={{ width: '30rem', height:'20rem' }} />
  <Card.Header>
  <Card.Title className={`mb-1 text-${theming.reservas.color}`}>Realice su reserva, le informamos que recibirá un correo electronico confirmado su reserva</Card.Title>

  </Card.Header>
  <Card.Body>
 
    

    <Form noValidate className="contenedor" onSubmit={handleSubmit} autocomplete="off">
              <Form.Group className={`mb-1 text-${theming.reservas.color}`} controlId="exampleForm.ControlInput1">
                <Form.Label id="label">{t("main.date")}</Form.Label>
              </Form.Group>
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Control className="input_btn" style={{ width: "20rem" }} type="date" name="date"placeholder="" required/>
              </Form.Group>
              <Form.Group className={`mb-1 text-${theming.reservas.color}`} controlId="exampleForm.ControlInput1">
              <Form.Label id="label">{t("main.reservation")}</Form.Label>
              </Form.Group>
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Control className="input_btn" style={{ width: "20rem" }} type="time" name="time" placeholder="" required/>
              </Form.Group>

              <Form.Group className={`mb-1 text-${theming.reservas.color}`}controlId="exampleForm.ControlInput1">
                <Form.Label id="label">{t("main.First")}</Form.Label>
              </Form.Group>
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                <Form.Control className="input_btn" style={{ width: "20rem" }} type="text" name="name" placeholder={t("main.placeenter")} required/>
              </Form.Group>
              <Form.Group className={`mb-1 text-${theming.reservas.color}`}controlId="exampleForm.ControlInput1">
                <Form.Label id="label">{t("main.numberof")}</Form.Label>
              </Form.Group>
              <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Control className="input_btn" style={{ width: "20rem" }} type="number" name="number" min="1" max="80" placeholder="" required/>
              </Form.Group>
              
              <Button type="submit">{<IoIosSend></IoIosSend>}</Button>
              
            </Form>
            <Button onClick={handleDelete} type="submit">borrar</Button>

  </Card.Body>
</Card>

          </Col>
        </Row>
      </Container>
      
      <Footer />
    </React.Fragment>
  );
}
  
  export default BookingCalendar;
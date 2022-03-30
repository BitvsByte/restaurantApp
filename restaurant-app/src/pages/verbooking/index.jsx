// import { useState,useEffect } from "react"
// import {ThemingContext} from './../../components/themimg-selector/theming.context'
// import { useContext } from "react"
// import { useNavigate } from "react-router-dom"
// import React from "react"

// import { Button } from "react-bootstrap"
// import Headerapp from "../../components/headerapp"
// import Footer from "../../components/footer"
// import Container from "react-bootstrap/Container"
// import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import './style.scss'
// import {FiTrash2} from 'react-icons/fi'
// import Card from 'react-bootstrap/Card'
// import agenda from '../../assets/img/agendatope.jpg'
// import {IoIosSend} from 'react-icons/io'
// import perfil from '../../assets/img/holaperfil.jpg'


// import { useTranslation } from "react-i18next";






// function LookBooking() {
//   const [theming, updateTheming] = useContext(ThemingContext);

//   let [user, updateUser] = useState([]);
//   let token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   const [t, i18n] = useTranslation("global");

//   useEffect(() => {
//     fetch("http://localhost:4000/users", {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((r) => r.json())
//       .then((info) => {
//         updateUser(info);
//         console.log(info);
//       });
//   }, []);

//   const handleDelete = () => {
//     fetch("http://localhost:4000/users", {
//       method: "DELETE",
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((j) => j.json())
//       .then((data) => {
//         console.log(data);
//       });

//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <React.Fragment>
//       <Container fluid className="contenedor_padre">
//         <Row>
//           <Col xl={{ span: 9, offset: 3 }}>
//           <Card style={{ width: '30rem' }} className="card_container">
//   <Card.Img variant="top" src={agenda} style={{ width: '30rem', height:'20rem' }} />
//   <Card.Header>
//   <Card.Title className={`mb-1 text-${theming.reservas.color}`}>Realice su reserva, le informamos que recibirá un correo electronico confirmado su reserva</Card.Title>

//   </Card.Header>
//   <Card.Body>
 
    

//     <Form noValidate className="contenedor" onSubmit={handleSubmit} autocomplete="off">
//               <Form.Group className={`mb-1 text-${theming.reservas.color}`} controlId="exampleForm.ControlInput1">
//                 <Form.Label id="label">{t("main.date")}</Form.Label>
//               </Form.Group>
//               <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//               <Form.Control className="input_btn" style={{ width: "20rem" }} type="date" name="date"placeholder="" required/>
//               </Form.Group>
//               <Form.Group className={`mb-1 text-${theming.reservas.color}`} controlId="exampleForm.ControlInput1">
//               <Form.Label id="label">{t("main.reservation")}</Form.Label>
//               </Form.Group>
//               <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//               <Form.Control className="input_btn" style={{ width: "20rem" }} type="time" name="time" placeholder="" required/>
//               </Form.Group>

//               <Form.Group className={`mb-1 text-${theming.reservas.color}`}controlId="exampleForm.ControlInput1">
//                 <Form.Label id="label">{t("main.First")}</Form.Label>
//               </Form.Group>
//               <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//                 <Form.Control className="input_btn" style={{ width: "20rem" }} type="text" name="name" placeholder={t("main.placeenter")} required/>
//               </Form.Group>
//               <Form.Group className={`mb-1 text-${theming.reservas.color}`}controlId="exampleForm.ControlInput1">
//                 <Form.Label id="label">{t("main.numberof")}</Form.Label>
//               </Form.Group>
//               <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
//                 <Form.Control className="input_btn" style={{ width: "20rem" }} type="number" name="number" min="1" max="80" placeholder="" required/>
//               </Form.Group>
              
//               <Button type="submit">{<IoIosSend></IoIosSend>}</Button>
              
//             </Form>
//             <Button onClick={handleDelete} type="submit">borrar</Button>

//   </Card.Body>
// </Card>

//           </Col>
//         </Row>
//       </Container>
      
//       <Footer />
//     </React.Fragment>
//   );
// }


// export default LookBooking;
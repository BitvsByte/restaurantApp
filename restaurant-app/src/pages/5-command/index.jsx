import React from "react";
import Headerappdos from "../../components/headerVal";
import Footer from "../../components/footer";
import './style.scss'
import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';  
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import {TiShoppingCart} from 'react-icons/ti'
import ModalCommand from "../../components/modalCommand";
import { Spinner } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { ThemingContext } from "../../components/themimg-selector/theming.context";
import { useTranslation } from "react-i18next";
import Headerapp from "../../components/headerapp";
import { useNavigate } from "react-router-dom";
import {GiNextButton} from 'react-icons/gi'



/**
 * 
 * 1- para obtener el menu de la colleccion command, debo realizar un fetch con un metodo get
 * 2- para poder "pintar" el menu debo usar un map

 * 
 */




function Commands() {
  const [menu, upDateMenu] = useState([]);
  const [t, i18n] = useTranslation("global");
  const [theming, changecolor] = useContext(ThemingContext);
  const [menus , updatemenus] = useState ([])  // "crear" un array para meterlo en el localStorage y en algun momento sacarlo 
  const navigate = useNavigate() // lo uso para navegar a la siguiente pag

  useEffect(() => {
    fetch("http://localhost:4000/command", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((m) => {
        upDateMenu(m);
        console.log(m);
      });
      
  }, []);

  const handleOnClick = (m) =>{   // lo uso para que el usuario de la app una vez que elija la comida pulse sobre el boton y envie la comanda al localStorage
    menus.push(m) // pusheo el objeto 
    updatemenus(menus)  
    console.log(menus)
    
    // console.log(Object.value(menu[0]))
    localStorage.setItem("compra", JSON.stringify(menus)); 
    console.log(m)
    
  }

  const handldeOnSend =()=>{  // timeout para navegar a la pag de pagos
    setTimeout(
      ()=>{
          navigate("/pago");
      }, 1200
  );
  }
  

  // {t("main.date")}
  // text-${theming.reservas.color}`}

  

  return (
    <React.Fragment>
     <Headerapp />

      <Container className="command_conatiner">
  <Row>
    <Col>
    
    <Card.Title className={`text-${theming.reservas.color}`}>{t("main.starter")}</Card.Title>
        {menu.length === 0
            ? <Spinner animation="border" />
            : menu[0].starter.map((c,i) => {
               
                return (
                    <Card key={i} style={{ width: "320px", height: "100px" }} className="d-flex flex-row justify-content-end mt-2 shadow card_containe">
                      <img className="zoom" variant="top" src={c.img} alt=''
                        style={{ width: "100px", height: "100px" }} />
                      <Card.Body className="card_body">
                      <Card.Title className="titles__command">{c.plate}</Card.Title>
                        <Card.Text>
                          <p className="price__command">{`${c.price} € iva incluido`}</p>
                          <p className="id__btn">{c.id}</p>
                        </Card.Text>
                      </Card.Body>
                      <Button onClick={()=>handleOnClick(c)} style={{ width: "35px", height: "35px"  }} variant="light">{<TiShoppingCart />}</Button>
                      {/* <ModalCommand /> */}
                    </Card>
                );
              })}
    </Col>
    <Col>
    
    <Card.Title className={`text-${theming.reservas.color}`}>{t("main.maindish")}</Card.Title>
        {menu.length === 0
            ? <Spinner animation="border" />
            : menu[0].first.map((c,i) => {
                console.log(c);
                return (
                  <Card key={i} style={{ width: "320px", height: "100px" }} className="d-flex flex-row justify-content-end mt-2 shadow card_containe">
                  <img className="zoom" variant="top" src={c.img} alt=''
                    style={{ width: "100px", height: "100px" }} />
                  <Card.Body className="card_body">
                  <Card.Title className="titles__command">{c.plate}</Card.Title>
                    <Card.Text>
                      <p className="price__command">{`${c.price} € iva incluido`}</p>
                      <p className="id__btn">{c.id}</p>
                    </Card.Text>
                  </Card.Body>
                  <Button onClick={()=>handleOnClick(c)} style={{ width: "35px", height: "35px"  }} variant="light">{<TiShoppingCart />}</Button>
                  {/* <ModalCommand /> */}
                </Card>
                );
              })}
    </Col>
    <Col>
    <Card.Title className={`text-${theming.reservas.color}`}>{t("main.secondcourse")}</Card.Title>
        {menu.length === 0
            ? <Spinner animation="border" />
            : menu[0].seconds.map((c,i) => {
                console.log(c);
                return (
                  <Card key={i} style={{ width: "320px", height: "100px" }} className="d-flex flex-row justify-content-end mt-2 shadow card_containe">
                  <img className="zoom" variant="top" src={c.img} alt=''
                    style={{ width: "100px", height: "100px" }} />
                  <Card.Body className="card_body">
                  <Card.Title className="titles__command">{c.plate}</Card.Title>
                    <Card.Text>
                      <p className="price__command">{`${c.price} € iva incluido`}</p>
                      <p className="id__btn">{c.id}</p>
                    </Card.Text>
                  </Card.Body>
                  <Button onClick={()=>handleOnClick(c)} style={{ width: "35px", height: "35px"  }} variant="light">{<TiShoppingCart />}</Button>
                  {/* <ModalCommand /> */}
                </Card>
                );
              })}
    </Col>
  </Row>
  <Row>

    <Col>
    
    <Card.Title className={`text-${theming.reservas.color}`}>{t("main.wine")}</Card.Title>
        {menu.length === 0
            ? <Spinner animation="border" />
            : menu[0].wine.map((c,i) => {
                console.log(c);
                return (
                  <Card key={i} style={{ width: "320px", height: "100px" }} className="d-flex flex-row justify-content-end mt-2 shadow card_containe">
                  <img className="zoom" variant="top" src={c.img} alt=''
                    style={{ width: "100px", height: "100px" }} />
                  <Card.Body className="card_body">
                  <Card.Title className="titles__command">{c.plate}</Card.Title>
                    <Card.Text>
                      <p className="price__command">{`${c.price} € iva incluido`}</p>
                      <p className="id__btn">{c.id}</p>
                    </Card.Text>
                  </Card.Body>
                  <Button onClick={()=>handleOnClick(c)} style={{ width: "35px", height: "35px"  }} variant="light">{<TiShoppingCart />}</Button>
                  {/* <ModalCommand /> */}
                </Card>
                );
              })}
    </Col>
    <Col>
    <Card.Title className={`text-${theming.reservas.color}`}>{t("main.soft")}</Card.Title>
    {menu.length === 0
            ? ""
            : menu[0].softdriks.map((c,i) => {
                console.log(c);
                return (
                  <Card key={i} style={{ width: "320px", height: "100px" }} className="d-flex flex-row justify-content-end mt-2 shadow card_containe">
                  <img className="zoom" variant="top" src={c.img} alt=''
                    style={{ width: "100px", height: "100px" }} />
                  <Card.Body className="card_body">
                  <Card.Title className="titles__command">{c.plate}</Card.Title>
                    <Card.Text>
                      <p className="price__command">{`${c.price} € iva incluido`}</p>
                      <p className="id__btn">{c.id}</p>
                    </Card.Text>
                  </Card.Body>
                  <Button onClick={()=>handleOnClick(c)} style={{ width: "35px", height: "35px"  }} variant="light">{<TiShoppingCart />}</Button>
                  {/* <ModalCommand /> */}
                </Card>
                );
              })}
    </Col>
  </Row>
  <Container className="d-flex flex-row justify-content-end pb-2">
  <Button onClick={handldeOnSend} variant="primary"><GiNextButton /></Button>{' '}
  </Container>
  
</Container>

      <Footer />
    </React.Fragment>
  );
}


export default Commands;
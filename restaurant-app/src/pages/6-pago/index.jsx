import React,{useEffect, useState} from "react";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Headerapp from "../../components/headerapp";
import Footer from "../../components/footer";
import './style.scss'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useContext } from "react";
import { ThemingContext } from "../../components/themimg-selector/theming.context";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";




function Payment() {

    const [command , upDateCommand]= useState ([])
    const [t, i18n] = useTranslation("global");
    const [theming, changecolor] = useContext(ThemingContext);
    const navigate = useNavigate()


    // llamar los datos que estan el localStorage y pintarlos en la app



    useEffect(()=>{
        let data = localStorage.getItem('compra');
        const finalComand= JSON.parse(data)
        
        upDateCommand(finalComand)
        
        

    },[]);

    console.log(command)

    const handldeOnReturn =()=>{
        setTimeout(
          ()=>{
              navigate("/pedido");
          }, 500
      );
      }




    return (

        <React.Fragment>
            <Headerapp />
            <Container className="command_conatiner">
                <Row>
                    <Col>
                    <Card.Title className={`text-${theming.reservas.color}`}>COMANDA</Card.Title>
            

            {command.length === 0
                        ? <Spinner animation="border" />
                        : command.map((c,i) => {
                           
                            return (
                                <Card key={i} style={{ width: "320px", height: "100px" }} className="d-flex flex-row justify-content-end mt-2 shadow card_containe">
                                  <img className="zoom" variant="top" src={c.img} alt=''
                                    style={{ width: "100px", height: "100px" }} />
                                  <Card.Body className="card_body">
                                  <Card.Title className="titles__command">{c.plate}</Card.Title>
                                    <Card.Text>
                                      <p className="price__command">{`${c.price} € iva incluido`}</p>
                                    </Card.Text>
                                  </Card.Body>
                                  {/* <Button onClick={''} style={{ width: "35px", height: "35px"  }} variant="light">{<TiShoppingCart />}</Button> */}
                                
                                </Card>
                            );
                          })}


                    </Col>
                </Row>

            </Container>
            <Button onClick={handldeOnReturn} variant="warning">Warning</Button>{' '}


              {/* <Footer /> */}
            
            




        </React.Fragment>

    )
}


export default Payment;
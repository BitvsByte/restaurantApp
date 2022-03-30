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
import {BiTrash} from 'react-icons/bi'
import {GiReturnArrow} from 'react-icons/gi'
import {IoIosSend} from 'react-icons/io'


const getDatafromLS=()=>{
  const  data = localStorage.getItem('compra');
  console.log(data)
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


function Payment() {

  const [command, upDateCommand] = useState([])
  const [t, i18n] = useTranslation("global");
  const [theming] = useContext(ThemingContext);
  const navigate = useNavigate()
  const [commands, setCommands] = useState(getDatafromLS());
  const [cooking, upDateCooking] = useState([])
  const cookingToken = localStorage.getItem('token')


  // llamar los datos que estan el localStorage y pintarlos en la a
  useEffect(() => {
    let data = localStorage.getItem('compra');
    const finalComand = JSON.parse(data)
    upDateCommand(finalComand)

  }, []);

  console.log(command)

  /**
   * 
   * funcion que debe borrar una de las comandas del local con el id
   * 
   * 
   */


  const handleOnDeleteComand = (id) => {
    const filteredCommand = commands.filter((element) => {
      return element.id !== id
    })
    setCommands(filteredCommand)
    localStorage.removeItem('id')


  }

  /**
   * 
   * funcion que navega de vuelta a la pag pedido
   * 
   */



  const handldeOnReturn = () => {
    setTimeout(
      () => {
        navigate("/pedido");
      }, 500
    );
  }

  const handleOnSend = () => {             // handle que se va a buscar al Local Storge la key "COMPRA" y la envia por fetch metodo post al back para en un futruo ser usado por la app de cocina
    const CookingBill = localStorage.getItem('compra')
    const finalCookingBill = JSON.parse(CookingBill)  // parsea los datos para poder ser leido en el formato correcto en este caso es un JSON
    upDateCooking(finalCookingBill)

    console.log(finalCookingBill)

    fetch("http://localhost:4000/cooking", {
      method: "POST",
      body: JSON.stringify(finalCookingBill), // esto son los datos (array) que se envia como body ( cuerpo) del mensaje
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${cookingToken}` }, // le pongo un token para que en cocina puedan filtrarlo mejor

    })
      .then((d) => d.json())
      .then((data) => {
        upDateCooking(...cooking, finalCookingBill);    // actualizo con lo que ya tiene cooking 
        console.log(finalCookingBill)

      });
      localStorage.removeItem("compra");

      setTimeout(
        ()=>{
            navigate("/pedido");
        }, 1000
    );



  };
    return (

        <React.Fragment>
            <Headerapp />
            <Container className="command_conatiner " style={{ width: "100%", height: "80vh" }}>
                <Row>
                    <Col xl={{ span: 9, offset: 5 }}>
                    <Card className="d-flex justify-content-center border-0"  style={{ width: "100%", height: "70vh" }}>

                    <Card.Title className={`bg-transparent d-flex justify-content-center text-${theming.reservas.color}`} style={{ width: "200px", height: "50px" }}>COMANDA</Card.Title>
                                {/* map que me permite pintar los datos que vienen de command */}
            {command.length === 0
                        ? <Spinner animation="border" />
                        : command.map((c,i) => {
                           
                            return (
                                <Card key={i} style={{ width: "300px", height: "40px" }} className="d-flex flex-row justify-content-end mt-2 shadow card_containe">
                                  <img className="zoom" variant="top" src={c.img} alt=''
                    style={{ width: "50px", height: "100%" }} />
                                  
                                    
                                  <Card.Body className="card_body">
                                  <Card.Title className="titles__command">{c.plate}</Card.Title>
                                  <p className="id__btn">{c.id}</p>

                                  </Card.Body>
                                  {/* <Button onClick={handleOnDeleteComand} style={{ width: "25px", height: "25px"  }} variant="light">{<BiTrash />}</Button> */}
                                
                                </Card>
                            );
                          })}
                          <Button className={`mt-3 text-${theming.comanda.color}`} onClick={handleOnSend} style={{ width: "150px", height: "40px" }} variant="primary">Envie su pedido{<IoIosSend />}</Button>
                    </Card>
                    </Col>
                </Row>
                <Button onClick={handldeOnReturn} variant="primary">{<GiReturnArrow />}</Button>{' '}
            </Container>
              <Footer />
        </React.Fragment>

    )
}


export default Payment;
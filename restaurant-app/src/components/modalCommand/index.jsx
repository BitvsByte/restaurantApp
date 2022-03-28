import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import './style.scss'
import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useContext } from 'react'
import { ThemingContext } from "./../themimg-selector/theming.context";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { TiShoppingCart } from 'react-icons/ti';
import { IoEyeOutline } from 'react-icons/io'
import { AiOutlineEye } from 'react-icons/ai'



function ModalCommand() {

  const [show, setShow] = useState(false);
  const [theming, updateTheming, logName, setLogName, menu, upDateMenu] = useContext(ThemingContext);
  const [t, i18n] = useTranslation("global");
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(upDateMenu)




  return (
    <React.Fragment>
      <Button style={{ width: "35px", height: "35px" }} className="btn__color" onClick={handleShow}>{<AiOutlineEye />}</Button>
      <Modal show={show} onHide={handleClose} style={{ width: '18rem',height:'18rem' }} className="modal_pos">
        <Card style={{ width: '18rem',height:'18rem' }}>
          <Card.Img variant="top" src=".." />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ModalCommand;
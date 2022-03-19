import React from "react";
import { Card,CardGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ThemingContext } from "../themimg-selector/theming.context";
import { useContext } from "react";




function MainTitles() {
  const [t, i18n] = useTranslation("global");
  const [theming, changecolor] = useContext(ThemingContext);

  return (
    <React.Fragment>
        <CardGroup className="pb-5 gap-3">
  <Card className="bg-transparent border-success border-3">
    
    <Card.Body>
    {/* <Card.Img variant="top" src="" /> */}

    </Card.Body>
    <Card.Footer>
      <medium>Realiza reservas de horas y mesas de forma sencilla y rapida</medium>
    </Card.Footer>
  </Card>
  <Card className="bg-transparent border-success border-3">
    
    <Card.Body>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}

    </Card.Body>
    <Card.Footer>
    {/* bg={theming.primary.color} */}
      <medium text={theming.typography.color}>Podras realizar tu pedido de forma segura dentro del local</medium>
    </Card.Footer>
  </Card>
  <Card className="bg-transparent border-success border-3">
   
    <Card.Body>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}

    </Card.Body>
    <Card.Footer>
      <medium>Paga de forma comoda y segura</medium>
    </Card.Footer>
  </Card>
</CardGroup>


    </React.Fragment>
  );
}
  
  export default MainTitles;
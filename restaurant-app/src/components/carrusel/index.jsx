import { Carousel } from 'react-bootstrap'
import slice1 from '../../assets/img/slice (1).jpg'
import slice2 from '../../assets/img/slice (2).jpg'
import slice3 from '../../assets/img/slice (3).jpg'
import slice4 from '../../assets/img/slice (4).jpg'
import slice5 from '../../assets/img/slice (5).jpg'
import slice6 from '../../assets/img/slice (6).jpg'
import slice7 from '../../assets/img/slice (7).jpg'
import slice8 from '../../assets/img/slice (8).jpg'

import { Row } from 'react-bootstrap'


import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'





function Carru() {
  return (
    <Container fluid className="pt-5" style={{width:"100%"}}>
          <Row>
       <Col xl={{span:9,offset:3}}>
              <Carousel className='d-flex justify-content-center align-content' fade>
        <Carousel.Item><img className="d-block w-50" src={slice1} alt="First slide" /></Carousel.Item>
        <Carousel.Item><img className="d-block w-50" src={slice2}alt="Second slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-50" src={slice3} alt="Third slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-50" src={slice4} alt="Third slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-50" src={slice5} alt="Third slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-50" src={slice6} alt="Third slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-50" src={slice7} alt="Third slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-50" src={slice8} alt="Third slide"/></Carousel.Item>
      </Carousel>
      </Col>
    </Row>

    </Container>

    
     

    
  );
}
  
  export default Carru;
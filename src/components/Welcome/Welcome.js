import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Welcome.css'
import welcomeImg from '../../images/bannner/about-banner1.ce5f70ed.png'

const Welcome = () => {
    return (
        <div className = 'welcome-part col-sm-12'>
        <Container>
        <Row>
          <Col>
            <img src={welcomeImg} alt="" />
          </Col>
          <Col className =' banner-title'>
              <h3 className = 'name-style'>Welcome to a Family</h3>
              <h1 >Better Dentistry</h1>
              <p>Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing.</p>
              <Button className ='mt-3' variant="info">Learn More</Button>
              
          
          </Col>
       </Row>
        </Container>
       
      </div>
    );
};

export default Welcome;
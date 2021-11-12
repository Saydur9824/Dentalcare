import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'



const Banner = () => {
    return (
        <div className = 'banner-part'>
          <Container>
          <Row>
            <Col></Col>
            <Col className =' banner-title'>
                <h3 className = 'name-style'>Better Life Through</h3>
                <h1 >Better Dentistry</h1>
                <p>Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
                <Button variant="dark">Appointment</Button>
                
            
            </Col>
         </Row>
          </Container>
         
        </div>
    );
};

export default Banner;
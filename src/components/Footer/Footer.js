import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footre.css'

const Footer = () => {
    return (
        
          <div className="footer-part pt-4 pb-4">
               <Container>
                <Row>
                    <Col>
                        <h2 className = 'name-style'>Services</h2>
                        <Link className = 'footer-link'><h6>Dental Dictionary</h6></Link>
                        <Link className = 'footer-link'><h6>Dental Sealands</h6></Link>
                        <Link className = 'footer-link'><h6>Dental Implants</h6></Link>
                        <Link className = 'footer-link'><h6>General Dentistry</h6></Link>
                        <Link className = 'footer-link'><h6>Sedation Dentistry</h6></Link>
                    </Col>
                    <Col xs={5}>
                        <h2 className = 'name-style'>Resources</h2>
                        <Link className = 'footer-link'><h6>New Patients</h6></Link>
                        <Link className = 'footer-link'><h6>Meet the Team</h6></Link>
                        <Link className = 'footer-link'><h6>Patient Form</h6></Link>
                        <Link className = 'footer-link'><h6>Insurance</h6></Link>
                        <Link className = 'footer-link'><h6>Account Login</h6></Link>
                    </Col>
                    <Col>
                        <h2 className = 'name-style'>Our Address</h2>
                        <h6>Datobbo Dentistry 5212 Cedar</h6>
                        <h6>Village Dr Mason, NY.</h6>
                        <h6>Phone:+1 3500 5867 340</h6>
                        <h6>Email:yourdomain@gmail.com</h6>
                        <h6>Fax:+1 675 5867 340</h6>
                    </Col>
                    
                </Row>
                <p className = 'mt-5'>© Copyright by Modina Theme - 2020</p>
            </Container>
          </div>
        
    );
};

export default Footer;


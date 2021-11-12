import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css'
import aboutImg from '../../images/bannner/flat-lay-aerial-accessories-healthcare-260nw-785760676.jpg'


const About = () => {
    return (
       <div>
            <div className = 'about-banner'>
             <Container>
                <Row className="offset-2">
                 
                    <Col md={8} className ='about-part'>
                        <h3 className = 'name-style'>About Us</h3>
                        <h1>Better Dentistry</h1>
                        <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
                        <Button variant="dark">Go To Home</Button>   
                    </Col>
                </Row>
          </Container>    
        </div>

        <Container className = 'mt-5 mb-5 '>
            <Row>
            <Col sm={8}>
                <h1 className = 'name-style'>Our Dental Practice</h1>
                <p>Since 1998, Donto Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. John Dae, Micha and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist.</p>
            </Col>
            <Col sm={4}>
                <img src={aboutImg} alt="" />
            </Col>
             </Row>
        </Container>
       
       </div>
    );
};

export default About;
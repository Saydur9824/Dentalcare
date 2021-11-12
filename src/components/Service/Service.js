import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Searvice.css'


const Service = (props) => {
    const history = useHistory();
   
    const {key, name,Fraction, img} = props.service;

    const handleClick = () => {
        history.push(`/singleService/${key}`)
    }
    return (
        <div >
           <Col>
                <Card className = 'service-part'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {Fraction}
                    </Card.Text>
                    </Card.Body>
                    <Button onClick = {handleClick} variant="dark">Details {name.toLowerCase()}</Button>
                    
                    
                   
                </Card>
                </Col>
        </div>
    );
};

export default Service;
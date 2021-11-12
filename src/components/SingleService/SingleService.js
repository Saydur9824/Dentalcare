import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './SingleService.css'



const SingleService = () => {
    const {serviceId} = useParams();
    const [serv, setServ] = useState([]);
   
   useEffect(()=>{
       fetch('/services.json')
        .then(res => res.json())
        .then(data => setServ(data))
   },[])
   console.log(serv.length);

  const findItem = serv.find(item => item.key == serviceId)
  console.log(findItem);
  

   
    return (
        <div>
          <Container className = 'mx-5 single-part'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={findItem?.img} />
            <Card.Body>
                <Card.Title>{findItem?.name}</Card.Title>
                <Card.Text>
                {findItem?.Fraction}
                </Card.Text>
                <Button variant="dark"> Go to home</Button>
            </Card.Body>
            </Card>
          </Container>
          
          
            
        </div>
    );
};

export default SingleService;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className = 'mt-5 mb-5'>
           <Container>
               <h2 className = 'mb-5 name-style'>OUR SERVICES</h2>
           <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service 
                    key = {service.key}
                    service = {service}
                ></Service> )
            }
            </Row>
           </Container>
           
          
        </div>
    );
};

export default Services;












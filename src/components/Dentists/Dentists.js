import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Dentist from '../Dentist/Dentist';
import './Dentists.css'

const Dentists = () => {
    const [dentists,  setDentists] = useState([]);

    useEffect(() => {
        fetch('/dentists.json')
            .then(res => res.json())
            .then(data => setDentists(data))
    },[])
    return (
        <div className = 'mt-4 mb-4'>
            <Container>
                 <h2 className = 'name-style mt-4 mb-5'>Dentist</h2>
                 <Row className="gy-4" >
                    {
                        dentists.map(dentist => <Dentist
                            key = {dentist.key}
                             dentist = {dentist}
                        ></Dentist> )
                    }
                </Row>
            </Container>
           
            
        </div>
    );
};

export default Dentists;
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {handleEmail,handlePass,handleName,createUser} = useAuth();
    return (
        <div>
            <Container className = 'mt-5 mb-5'>
                <h2 className = 'name-style mt-4 mb-5'>Please Register</h2>
             <Form onSubmit={createUser}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                

                

                <input className="btn btn-info" type="submit" value="Sign up" />
                   
                </Form>
            </Container>
        </div>
    );
};

export default Register;
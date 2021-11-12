import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInGoogle, user,
        handleSubmit,handleName,handlePass,handleEmail} = useAuth();
    return (
        <div>
            <Container className ='mt-5 mb-5'>
            <h2 className = 'pb-4 pt-4 name-style'> Please login</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={4}>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={4}>
                <Form.Control type="password" onBlur={handlePass} placeholder="Password" />
                </Col>
            </Form.Group>
        

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 2, offset: 2 }}>
                    <input type="submit" className="btn btn-info mb-2 mx-2" value="Login" />
                <Button onClick = {signInGoogle} variant="outline-dark">Google Sign In</Button>
                </Col>
            </Form.Group>
            </Form>
            </Container>
           
        </div>
    );
};

export default Login;












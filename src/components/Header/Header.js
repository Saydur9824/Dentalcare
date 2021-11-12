import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const {user,  logOut} = useAuth();
    return (
        <>
            <Navbar className = 'pt-4 pb-4' bg="dark" variant="dark"  sticky="top"  collapseOnSelect  expand="lg">
                <Container>
                <Navbar.Brand className = 'name-style'>DENTALCARE</Navbar.Brand>
                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                    <Nav.Link as = {Link} to="/home">home</Nav.Link>
                    <Nav.Link as = {Link} to="/services">Services</Nav.Link>
                    <Nav.Link as = {Link} to="/singleService/serviceId">SingleService</Nav.Link>
                    <Nav.Link as = {Link} to="/about">About</Nav.Link>
                    <Nav.Link as = {Link} to="/dentists">Dentists</Nav.Link>
                    <Nav.Link as = {Link} to="/registrer">Registrer</Nav.Link>
                    {user?.email ?
                        <Button onClick = {logOut} variant="dark">Log Out</Button> :
                        <Nav.Link as = {Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
       
        </>
    );
};

export default Header;

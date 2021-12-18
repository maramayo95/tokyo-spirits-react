
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget.js'



const NavBar = () => {
    return (
        <Navbar className="nav">
        <Container>
        <Navbar.Brand href="#home">Tokyo Spirits</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Anime</Nav.Link>
          <Nav.Link href="#pricing">Series</Nav.Link>
          <Nav.Link href="#pricing"><CartWidget /></Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}

export default NavBar

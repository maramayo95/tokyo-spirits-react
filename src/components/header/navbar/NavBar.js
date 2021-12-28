
import React from 'react'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import CartWidget from './CartWidget.js'
import './NavBar.css'


const NavBar = () => {
    return (
      <Navbar bg="dark" variant ="dark" expand="lg">
  <Navbar.Brand href="#home">Tokyo-Spirits</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
      <NavDropdown title="Anime" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Anime</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Novedades</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Clasicos</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link"><CartWidget /></Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>

    )
}

export default NavBar

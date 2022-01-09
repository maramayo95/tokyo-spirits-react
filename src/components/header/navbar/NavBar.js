
import React from 'react'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import CartWidget from './CartWidget.js'
import './NavBar.css'

import {LinkContainer} from 'react-router-bootstrap'
 
const NavBar = () => {
    return (
      <Navbar bg="dark" variant ="dark" expand="lg">
  <LinkContainer to="/">
    <Navbar.Brand >Tokyo-Spirits</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

      <NavDropdown title="Anime" id="basic-nav-dropdown">
        
        <LinkContainer to="categoria/anime">
        <NavDropdown.Item>Anime</NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to="categoria/novedades">
        <NavDropdown.Item>Novedades</NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to="categoria/clasicos">
        <NavDropdown.Item>Clasicos</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
      <LinkContainer to="/cart">
      <Nav.Link><CartWidget /></Nav.Link>
      </LinkContainer>
    </Nav>

  </Navbar.Collapse>
</Navbar>

    )
}

export default NavBar

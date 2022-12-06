import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Logo from '../../assets/naturepharma.jpg'
import './NavBar.css'

const NavBar = () => {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <img className="logo"src={Logo} alt='imagen'/>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Zoa organic</Nav.Link>
          <Nav.Link href="#pricing">Sucursales</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          
          <Nav.Link eventKey={2} href="#memes">
            Carrito 🛒
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  )
}

export default NavBar
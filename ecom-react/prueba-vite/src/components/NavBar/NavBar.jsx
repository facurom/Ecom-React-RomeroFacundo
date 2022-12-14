import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/naturepharma.jpg'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <img className="logo"src={Logo} alt='imagen'/>
      <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} to='/node_modules'>Home</NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} to="/categoria/makeup">Zoa organic</NavLink>
          <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} to="/categoria/cremasfaciales">Cremas Faciales</NavLink>
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
          
          <Link to='/cart'>
            
            <CartWidget/>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  )
}

export default NavBar
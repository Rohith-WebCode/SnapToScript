import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './convert-to-text-icon-512x512-vijlem5d.png'
import './NavBar.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const TheNavbar =()=>{
  const navigate = useNavigate()

    return (
        <>
          <Navbar className="nav" collapseOnSelect expand="lg"  data-bs-theme="light">
            <Container>
              <Navbar.Brand  className="logo-text"><img src={Logo} className="Logo"></img>SnapToScript</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link > <Link to="/" className="link">Converter</Link> </Nav.Link>
                <Nav.Link ><Link to="/?section=top" className="link">How To Use</Link></Nav.Link>
                <Nav.Link><Link to="/?section=FAQs" className="link">FAQs</Link></Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );

}

export default TheNavbar
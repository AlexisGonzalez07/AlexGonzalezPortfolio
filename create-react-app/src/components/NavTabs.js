import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"
        onClick={() => handlePageChange('Home')}>Home</Nav.Link>
        <Nav.Link href="#My-Work"
        onClick={() => handlePageChange('ProjectCards')}>My Work</Nav.Link>
        <Nav.Link href="#Contact-Me"
        onClick={() => handlePageChange('Contact')}>Contact Me</Nav.Link>
        <Nav.Link target="_blank" href="#./assets/files/May2021-Resume.pdf"
        onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default NavTabs;
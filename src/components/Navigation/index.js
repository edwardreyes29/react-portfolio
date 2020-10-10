import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
export const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Edward Reyes</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">contact</Nav.Link>
      </Nav>
    </Navbar>
  )
}
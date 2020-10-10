import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
export const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Portfolio</Nav.Link>
      </Nav>
    </Navbar>
  )
}
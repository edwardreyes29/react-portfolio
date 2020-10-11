import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import './style.css';

const styles = {
  brand: {
    fontSize: '36px'
  },
  links: {
    fontSize: '20px',
  }
}

export const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home' className='brand-name' style={styles.brand}>Edward Reyes</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href='#home' style={styles.links}>Home</Nav.Link>
        <Nav.Link href='#portfolio' style={styles.links}>Portfolio</Nav.Link>
        <Nav.Link href='#contact' style={styles.links}>contact</Nav.Link>
      </Nav>
    </Navbar>
  )
}
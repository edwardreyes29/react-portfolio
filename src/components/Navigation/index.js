import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge, Image } from 'react-bootstrap';
import logoWhite from '../../assets/svg/logo-white.svg';
import './style.css';

const styles = {
  brand: {
    fontSize: '36px'
  },
  links: {
    fontSize: '20px',
  },
  background: {
    background: '#121212'
  }
}

export const Navigation = () => {
  return (
    <Navbar variant='dark' fixed='top' style={styles.background}>
      <Navbar.Brand href='#home' className='brand-name' style={styles.brand}>
      <Image src={logoWhite} style={{width: '45px'}}/>
      </Navbar.Brand>
      <Nav className='mr-auto navigation-links' style={{textTransform: 'uppercase'}}>
        <Nav.Link style={styles.links}>
          <Link to='/' style={{textDecoration: 'none', color: '#fff'}}>
            Home
          </Link>
        </Nav.Link>
        <Nav.Link style={styles.links}>
          <Link to='/portfolio' style={{textDecoration: 'none', color: '#fff'}}>
            Portfolio
          </Link>
        </Nav.Link>
        <Nav.Link style={styles.links}>
          <Link to='/contact' style={{textDecoration: 'none', color: '#fff'}}>
            Contact
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
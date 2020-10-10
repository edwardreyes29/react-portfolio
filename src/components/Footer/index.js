import React from 'react';
import './style.css';
import { Container } from 'react-bootstrap';
// const styles = {
//   background: "red"
// }
export const Footer = () => {

  return (
    <footer className="footer bg-dark text-light">
      <Container fluid>
        <div>This is the footer</div>
      </Container>
    </footer>
  )
}
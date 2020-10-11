import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = {
  icon: {
    fontSize: 40
  }
}
export const Footer = () => {

  return (
    <footer className="footer bg-dark text-light">
      <Container fluid>
        <Row>
          <Col>
            <LinkedInIcon style={styles.icon}/>
          </Col>
          <Col>
            <GitHubIcon style={styles.icon}/>
          </Col>
          <Col>
            <div>2020 © Edward Reyes | All rights reserved.</div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
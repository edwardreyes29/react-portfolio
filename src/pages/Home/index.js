import React, { useState, useEffect } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const styles = {
  jumbotronText: {
    fontSize: '18px'
  }
}

export const Home = () => {
  return (<>
    <Jumbotron fluid className='text-center'>
      <Container>
        <h1>Hi I'm Edward</h1>
        <p style={styles.jumbotronText}>Software Developer & Full-Stack Web Developer</p>
      </Container>
    </Jumbotron>
    <Container>
      <div className="text-center">
        <h2>About Me</h2>
      </div>
    </Container>
  </>)
}
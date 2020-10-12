import React from 'react';
// Bootstrap
import { Container, Jumbotron, Row, Col, Image, Badge} from 'react-bootstrap';
// Components
import Card from '../../components/Card';
// import Backdrop from '../../components/Backdrop';

// Data
import projects from '../../projects.json';

const styles = {
  jumbotronText: {
    fontSize: '18px',
    // textTransform: 'uppercase'
  },
  jumbotron: {
    backgroundColor: '#40916C',
    // backgroundImage: `url(${jumbotronWallpaper})`,
    // backgroundAttachment: 'fixed',
    color: '#fff'
  }
}
export const Portfolio = () => {
  return (<>
    {/* {console.log(projects)} */}
    <Jumbotron fluid className='text-center' style={styles.jumbotron}>
      <Container className='mt-2'>
        <h1>Projects</h1>
      </Container>
    </Jumbotron>
    <Container>
      <Row xs={1} md={2}>
        {projects.map(project => 
          (<Col><Card data={project} /></Col>) 
        )}
      </Row>
    </Container>
  </>)
}
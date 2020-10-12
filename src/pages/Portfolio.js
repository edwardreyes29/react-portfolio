import React from 'react';

// Bootstrap
import { Container, Jumbotron, Row, Col, Image, Badge} from 'react-bootstrap';
// Material-UI Icons
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Components
import Card from '../components/Card';
// import Backdrop from '../../components/Backdrop';

// Data
import projects from '../projects.json';


const styles = {
  sectionStyle: {
    fontFamily: 'Roboto Condensed, sans-serif',
    textAlign: 'center'
  },
  jumbotronText: {
    fontSize: '18px',
    // textTransform: 'uppercase'
  },
  jumbotron: {
    backgroundColor: '#40916C',
    // backgroundImage: `url(${jumbotronWallpaper})`,
    // backgroundAttachment: 'fixed',
    color: '#fff'
  },
  headingIcon: {
    color: '#40916C',
    fontSize: 100
  },
  expandMoreIcon: {
    color: '#40916C',
    fontSize: 60,
  },
  sectionHeading: {
    textTransform: 'uppercase'
  }
}
const Portfolio = () => {
  return (<>
    {/* {console.log(projects)} */}
    {/* <Jumbotron fluid className='text-center' style={styles.jumbotron}>
      <Container className='mt-2'>
        <h1>Projects</h1>
      </Container>
    </Jumbotron> */}
    <Container >
      <section style={styles.sectionStyle}>
        <ExpandMoreIcon style={styles.expandMoreIcon}/>
        <h2 style={styles.sectionHeading}>My recent work</h2>
        <Row xs={1} md={2}>
          {projects.map(project => 
            (<Col><Card data={project} /></Col>) 
          )}
        </Row>
      </section>
    </Container>
  </>)
}

export default Portfolio;
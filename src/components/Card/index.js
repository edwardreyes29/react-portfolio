import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
// Components
import Modal from '../Modal';
import abstract from '../../assets/images/jumbotron-wallpaper.jpg';

// Materialize-UI Icons
import LaunchIcon from '@material-ui/icons/Launch';

import './style.css';

export default function ProjectCard({ data }) {
  const [hover, setHover] = useState(false);
  const [close, setClose] = useState(false);
  useEffect(() => {
    if (close) {
      setClose(false);
      setHover(false);
    }
  }, [close])

  const hoverTrue = () => {
    setHover(true);
  }

  const hoverFalse = () => {
    setHover(false);
  }

  const toggleClose = () => {
    setHover(false)
    setClose(true);
  }

  let cardStyle;
  if (hover) {
    cardStyle = {
      opacity: 1,
      background: 'rgba(0,0,0,0.8)',
      transition: `${hover ? '0.5s' : '0.5s;'}`
    }
  } else {
    cardStyle = {
      opacity: 0,
      background: 'rgba(0,0,0,0)',
      transition: `${hover ? '0.5s' : '0.5s;'}`,
      alignItems: 'center',
    }
  }

  return (
    <Card className="text-white">
      {/* {console.log(data)} */}
      {/* {console.log(data.images)} */}
      <Card.Img src={data.images[0]} alt="Card image" />
      <Card.ImgOverlay className='image-overlay'
        style={cardStyle}
        onMouseEnter={hoverTrue} onMouseLeave={hoverFalse}
      >
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <div className='mb-2'>
            <Modal 
              hoverState={toggleClose} 
              data={data}
            />
          </div>
          {/* <div>
            <a 
              href={data.links.deployed} 
              target='_blank'
              style={{textDecoration: 'none', color: '#fff'}}
            >
              <Button variant='outline-light'>Visit site</Button>
            </a>
          </div> */}
          <Button variant='outline-light'>
            <LaunchIcon />
            <a
              href={data.links.deployed} target='_blank'
              style={{ textDecoration: 'none', color: 'inherit' }}
              className='ml-1'
            >
              Website
            </a>
          </Button>
        </Card.Body>
        {/* {hover ? (<>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
          <Modal />
        </>) : (
          <Card.Title 
            style={{fontSize: '30px', background: 'rgba(0,0,0,0.7)', width: '100%'}}
            className='text-center p-3'
          >
            Project Title
          </Card.Title>
        )} */}

      </Card.ImgOverlay>
    </Card>
  );
}
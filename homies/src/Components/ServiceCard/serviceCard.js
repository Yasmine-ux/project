import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import './CardStyle.css'

 function ServiceCard(props) {

   
        return (
            <div className='cards'>
                
                {props.card.map(el=>
                <Card className="text-white cards" style={{ width: '450px' }}>
                <Card.Img src={el.src} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title className='title'>{el.title}</Card.Title>
                  {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
                 
                //  <Card className='card' border="warning" style={{ width: '450px' }}>
                //   <Card.Img variant="top" src={el.src} />
                //   <Card.Body className='card-body'>
                //   <Card.Title className='title'>{el.title}</Card.Title>
                //   <Button variant="outline-warning" >Choose now!</Button>
                //   </Card.Body>
                //  </Card>
                 
                 )} 
            </div>
        )
    }

export default ServiceCard

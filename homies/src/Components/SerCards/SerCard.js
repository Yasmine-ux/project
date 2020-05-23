import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './style.css'

export default function SerCard(props) {
    return (
        <div className='card-div'>
            {props.card.map(el=>
        <div className='SerCard'> 
            <Card border="warning"  style={{ width: '18rem' }} className='service-Card'>
  <Card.Img className='Card-img' variant="top" src="https://www.amonservice.com/wp-content/uploads/2017/08/avatar.png" height='250px' />
  <Card.Body>
            <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {el.desc}
    </Card.Text>
    <Button variant="outline-warning" className='service-card-btn'>Book</Button>
  </Card.Body>
</Card>
        </div>)}
        </div>
    )
}

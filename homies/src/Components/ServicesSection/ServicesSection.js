import React, { Component } from 'react';
import './style.css';
import ServiceCard from '../ServiceCard/serviceCard';

const cards = [{src:'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', title:'Plumbing and Painting'},
                {src:'https://images.unsplash.com/photo-1575467678930-c7acd65d6470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title:'Home Help'},
                {src:'https://images.unsplash.com/photo-1555955207-b96159c16808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', title:'Garden and Outdoor'},
                {src:'https://images.unsplash.com/photo-1513221191397-544071c48f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title:'Health and Beauty'}
]

export default class ServicesSection extends Component {
    render() {
        return (
            <div className='Service-section'>
                <h1>What are you looking for ... ?</h1>
                <ServiceCard card={cards}/>
                
            </div>
        )
    }
}



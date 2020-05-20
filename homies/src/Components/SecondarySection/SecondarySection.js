import React, { Component } from 'react'
import './style.css'


export default class SecondarySection extends Component {
    render() {
        return (
            <div className='sec-section'>
                <div className='part'>
                <img className='image' alt='1' src={require('./un.png')}  />
                <h4 className='Title'>Find your service provider</h4>
                <p className='Text'>Search for what you need in the search box and choose your service provider</p>
                </div>
                <div className='part'>
                <img className='image' alt='2' src={require('./deux.png')}  />
                <h4 className='Title'>Book your service</h4>
                <p className='Text'>In every service you will find a button an..hop! Your service is booked </p>
                </div>
                <div className='part'>
                <img className='image' alt='3' src={require('./trois.png')}  />
                <h4 className='Title'>Offer your service</h4>
                <p className='Text'>You can also register as a service provider and offer your services!</p>
                </div>
            </div>
        )
    }
}

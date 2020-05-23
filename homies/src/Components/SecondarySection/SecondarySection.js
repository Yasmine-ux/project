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
                <p className='Text'>Click on the reserve button and your request will be sent! </p>
                </div>
                <div className='part'>
                <img className='image' alt='3' src={require('./trois.png')}  />
                <h4 className='Title'>Knock Knock!</h4>
                <p className='Text'>After accepting your request, your service provider will be outside your door!</p>
                </div>
            </div>
        )
    }
}

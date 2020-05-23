import React from 'react'
import './style.css'
export default function ThirdSection() {
    return (
        <div className='all'>
            <div className='third-section'>
            <h5 className='titre'>Are you a service provider? </h5>
            <h6>Find new customers!</h6>
            </div>
            <div className='third-section-container'>
                <div className='container3 first'>
                    <h4 className='third-section-title'>Enjoy your free time!</h4>
                    <li>Simply find your service</li>
                    <li>Book it diretly online</li>
                    <li>The server provider is paid once the job is done!</li>
                    <button className='third-section-btn'>Book now!</button>
                </div>
                <div className='container3'>
                    <h4 className='third-section-title'>Find new clients!</h4>
                    <li>Customers reserve you online</li>
                    <li>Respond to customer requests</li>
                    <li>Secure payment!</li>
                    <button className='third-section-btn'>Create an account</button>
                </div>
                <div className='container3'>
                    <h4 className='third-section-title'>Trust us!</h4>
                    <li>Describe your request in one minute</li>
                    <li>We find you the servers</li>
                    <li>Recieve offers and book!</li>
                    <button className='third-section-btn'>Post an offer</button>
                </div>
            </div>
        </div>
    )
}

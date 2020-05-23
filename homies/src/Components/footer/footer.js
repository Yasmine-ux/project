import React from 'react';
import './style.css'

 function Footer() {
    return (
        <div className='main-footer dark' className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6' >
                        <h4 className='footer-title'>HOMIES</h4>
                        <ul className='list-unstyled'>
                            <li>Home</li>
                            <li>Service Provider account</li>
                            <li>User account</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6' >
                        <h4 className='footer-title'>Our famous services</h4>
                        <ul className='list-unstyled'>
                            <li>Baby-sitting</li>
                            <li>Gardening</li>
                            <li>Housework</li>
                            <li>Plumbing</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom rights'>
                    <p className='text-xs-center right'>
                        &copy;{new Date().getFullYear()} Homies Web Site. All Rights Reserved
                    </p>
                </div>
            </div>
            
        </div>
    )
}
export default Footer

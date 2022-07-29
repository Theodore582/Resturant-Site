import React from 'react'
import './Footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='mini-footer'>
                <div className='word'>
                    <h2>EAT TOGETHER</h2>
                    <h5>Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour–<br></br>
                        dessert.</h5>
                    <button className='reserve-button'>MAKE RESERVATION</button>
                </div>
            </div>


            <div className='footer'>
               <ul>
                    <li> <h2>CONTACT</h2></li>
                    <li>Sambas Region</li>
                    <li>East Blue Near Grand Line</li>
                    </ul>


                    <ul className='move'>
                    <li> <h2>BARATIE</h2></li>
                    <li><FaInstagram className='icons'/>  <FaTwitter className='icon'/></li>
                    <li>Sambas Region</li>
                    <li>email@example.com</li>
                    <li>(555) 888-9999</li>
                    </ul>
                   
                    <ul className='move'>
                    <li> <h2>HOURS</h2></li>
                    <li>Monday - Sunday</li>
                    <li>10am - 10pm</li>
                    </ul>
            </div>
        </div>
    )
}

export default Footer
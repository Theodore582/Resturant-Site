import React from 'react'
import './Home.css'
import home from '../../Images/home.png'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='Hom'>
    <div className='Home'>
    
    <h1>BARATIE</h1>
   <ul>
    <li>HOME</li>
    <li>MENU</li>
    <li>GALLERY</li>
    <li>VISIT</li>
    <li><FaInstagram /></li>
    <li><FaTwitter /></li>
    </ul>
     </div>

     <div className='middle'>
    <h1>EAT</h1>
    <h1>DRINK</h1>
    <h1>VISIT</h1>
    </div>

    
    
    
    </div>
  )
}

export default Home
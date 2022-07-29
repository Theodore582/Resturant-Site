import React from 'react'
import './Gallery.css'
import { pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9 } from './images'

const Gallery = () => {
  return (
    <div>
<div className='Gallery'>
 <img src={pic1}/>
 <img src={pic2}/>
 <img src={pic3}/>
 </div>
 <div className='Gallery'>
 <img src={pic4}/>
 <img src={pic5}/>
 <img src={pic6}/>
 </div>
 <div className='Gallery'>
 <img src={pic7}/>
 <img src={pic8}/>
 <img src={pic9}/>
 </div>


    </div>
  )
}

export default Gallery
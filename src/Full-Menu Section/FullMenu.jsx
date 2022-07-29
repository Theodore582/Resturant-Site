import React from 'react'
import './FullMenu.css'
import middle from '../Images/middle.png'

const FullMenu = () => {
  return (
    <div>
      <div className='header'>
        <button className='nob'>FULL MENU</button>
      </div >

      <div className='testimonals'>
        <div className='left'>
              <p>
              "When your eggs are accompanied by the long-lost cowboy fry bread, you know you’re in for a treat. The cocktails are expertly crafted and the meals at Baratier are simple yet decadent. The only thing you’ll regret is not having a nap pod to jump into afterwards."
              </p>
              <h5>-Monkey D. Luffy</h5>
        </div>
        <div className='right'>
        <img src={middle} />
            
        </div>
          
        
</div>



    </div>
  )
}

export default FullMenu
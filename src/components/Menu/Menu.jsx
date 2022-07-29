import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <div>
<div className='Menu'>
<h1>Our Menu</h1>
</div>

<div className='breakfast'>
    <h3>Breakfast</h3>
    <h3>Lunch</h3>
    <h3>Dinner</h3>
    <h3>Drinks</h3>
</div>


<div className='options'>
    <div className='menu-section'>
    <h4 className='title'>Buttermilk Flapjacks <span>$16</span></h4>
<p>
Two flapjacks served with molasses and
our signature sassafras-infused whipped cream.</p>
</div>

<div className='menu-section'>
 <h4 className='title'>Hotcakes & Sausage<span>$12</span></h4>
<p>
Cornmeal and molasses hotcakes served with sweet fennel pork sausage.</p>
<hr className='line1'></hr>
</div>

</div>
<hr className='linee'></hr>


<div className='options'>
    <div className='menu-section'>
    <h4 className='title'>Buckwheat Cakes Honey <span>$17</span></h4>
<p>

Two thick buckwheat cakes served with honey and our signature sassafras-infused whipped cream.</p>
</div>

<div className='menu-section'>
 <h4 className='title'>Grits & Strawberries<span>$16</span></h4>
    
<p>
Corn grits and local beans known as
Arizona Strawberries. Served with onion, garlic,poblano, and ham gravy.</p>
</div>

</div>

    </div>
  )
}

export default Menu
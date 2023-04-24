import React from 'react';
import img1 from './images/Vector.png';

function Header(props) {
    return (
        <div className='container'>
      <div>
    <img className='img1' src={img1} alt=""/>
    </div>
    <div>
    <h2 className='heading'>Referrizer</h2>
    </div>
    <div>
      <h2 className='solution'>Solutions</h2>
    </div>
    <div>
      <h2 className='price'>Pricing</h2>
    </div>
    <div>
      <h2 className='test'>Testimonials</h2>
    </div>
    <div>
      <button className='button'>Log in</button>
    </div>
    <div>
      <button className='button2'>Get started for free</button>
    </div>
    </div>
    );
}

export default Header;
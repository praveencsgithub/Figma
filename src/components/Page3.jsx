import React from 'react';
import img5 from './images/DSC.png';

function Page3(props) {
    return (
        <div className='container3'>
      <div className='paragraph'>
     <h2 className='mission'>Mission</h2>
     <h1 className='mission2'>Our Mission</h1>
    <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas</p>
    <p className='para'>ipsum ut morbi feugiat ut egestas vulputate phasellus malesuada.</p>
    <p className='para'>Mauris dignissim et tellus enim diam sed.</p>
    <p className='para1'>Pellentesque id tellus, molestie non, imperdiet sed vitae nullam</p>
    <p className='para'>odio. Morbi tellus, odio in duis quis lorem. Malesuada nisl sapien</p>
    <p className='para'> gravida elementum ac, et placerat eu.</p>
    </div>
    <img className='img5' src={img5} alt=""/>
    </div>
    );
}

export default Page3;
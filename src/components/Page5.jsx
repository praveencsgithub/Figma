import React from 'react';
import img6 from './images/Vector (1).png';
import img7 from './images/Vector (2).png';
import img8 from './images/Vector (3).png';

function Page5(props) {
    return (
        <div className='container5'>
      <h3 className='value'>Values</h3>
      <h1 className='values'>Our values</h1>
      <div className='ourvalue'>
      <div>
      <img className='img6' src={img6} alt=""/>
      <h1 className='people'>People first</h1>
      <h4 className='create'>Creating high-converting landing pages in</h4>
      <h4 className='minute'>minutes,even if you are not a marketing</h4>
      </div>
      <div>
      <img className='img7' src={img7} alt=""/>
      <h1 className='customer'>Customer focused</h1>
      <h4 className='google'>Get to the top of google search results with</h4>
      <h4 className='seo'>SEO optimized pages</h4>
      </div>
      <div>
      <img className='img8' src={img8} alt=""/>
      <h1 className='transparency'>Transparency</h1>
      <h4 className='attract'>Attract a high volume of free traffic and</h4>
      <h4 className='turn'>turn it into paying customers</h4>
      </div>
    </div>
    </div>
    );
}

export default Page5;
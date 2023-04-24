import React from 'react';
import img2 from './images/Ellipse.png';
import img3 from './images/unsplash.png';
import img4 from './images/Ellipse2.png';
function Page2(props) {
    return (
        <div className='container2'>
        <div>
        <img className='img2' src={img2} alt=""/>
        </div>
        <div className='about'>
          <h3 className='head3'> About us</h3>
          <h1 className='head4'>Who we are</h1>
          <h1 className='head5'>and what we do</h1>
        <p className='top'> Lorem ipsum, dolor sit amet consectetur adipisicing elit.Purus</p>
       <p className='top2'> quis eget viverra integer aliquam enim volutpat nisi, in.</p>
        </div>
        <div className='image'>
        <img className='img3' src={img3} alt=""/>
        </div>
        <div>
        <img className='img4' src={img4} alt=""/>
        </div>
      </div>
    );
}

export default Page2;
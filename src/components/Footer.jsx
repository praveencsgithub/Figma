import React from 'react';
import img1 from './images/Vector.png';
import img23 from './images/linkedin.png'
import img24 from './images/twitter.png'
import img25 from './images/instagram.png'
import img26 from './images/Fb.svg'
import img27 from './images/yt.png'


function Footer(props) {
    return (
        <>
        <div className='footer'>
        <div className='img233'>
        <img className='img233' src={img1} alt=""/>
        </div>
        <div>
        <h2 className='refer'>Referrizer</h2>
        </div>
        <ul className='group'>
          <li className='list'>Company</li>
          <li className='list1'>About us</li>
          <li className='list1'>We are hiring</li>
          <li className='list1'>Investors</li>
          <li className='list1'>Contact us</li>
        </ul>
        <ul className='group1'>
          <li className='list'>Solutions</li>
          <li className='list1'>Customer Lead Generation</li>
          <li className='list1' >Customer Retention Boost</li>
          <li className='list1'>Reputation Management Boost</li>
          <li className='list1' >Marketing Automation</li>
          <li className='list1'>PartnerUp Network</li>
        </ul>
        <ul className='group2'>
        <li className='list'>Resources</li>
          <li className='list1'>Blog</li>
          <li className='list1'>Videos</li>
          <li className='list1'>Case Studies</li>
          <li className='list1'>Marketplace</li>
          <li className='list1' >Industries</li>
        </ul>
        <ul className='group3'>
          <li className='list'>Help</li>
          <li className='list1'>Support</li>
          <li className='list1'>Knowledge Base</li>
          <li className='list1'>Live Chat</li>
        </ul>
        <ul className='group4'>
          <li className='list'>Partners</li>
          <li className='list1'>Development Partners</li>
          <li className='list1'>Affiliate Program</li>
          <li className='list1'>Partner Offers</li>
        </ul>
        </div>
        <div className='footer2'>
        <img className='img23' src={img23} alt=""/>
        <img className='img24' src={img24} alt=""/>
        <img className='img25' src={img25} alt=""/>
        <img className='img26' src={img26} alt=""/>
        <img className='img27' src={img27} alt=""/>
        <div>
        <h3 className='inc'>©2013-2021 Referrizer inc.</h3>
        </div>
        <div>
        <h3 className='login'>Login</h3>
        </div>
        <div>
        <h3 className='sign'>Sign up for free</h3>
        </div>
        </div>
        </>
    );
}

export default Footer;
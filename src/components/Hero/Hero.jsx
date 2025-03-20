// import React from 'react'
// import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
// import anchorLink from 'react-anchor-link-smooth-scroll'

// const Hero = () => {
//   return (
//     <div id='home' className='hero'>
//         <img src={profile_img} alt="" />
//         <h1> <span> I'm Albin Jacob Philip,</span>
//            Full Stack Developer Based in India.</h1>
//             <p>Iam a full stack developer from kerala</p>
//         <div className="hero-action">
//             <div className="hero-connect"><AnchorLink className='anchore-link' offset={50} href='#contact'>
//                       Connect with Me
//                     </AnchorLink></div>
//             <div className="hero-resume">My-Resume</div>
//         </div>
//     </div>
//   )
// } 

// export default Hero

import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // ✅ Fixed import

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      
      <h1>
        <span>I'm Albin Jacob Philip,</span> Full Stack Developer Based in India.
      </h1>
      
      <p>I'm a full-stack developer from Kerala.</p>
      
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchore-link' offset={50} href='#contact'>
            Connect with Me
          </AnchorLink>
        </div>

        {/* ✅ Updated Resume Button to Download Resume */}
        <a className="hero-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

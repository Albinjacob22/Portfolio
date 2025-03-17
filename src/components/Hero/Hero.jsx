import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span> I'm Albin Jacob Philip,</span>
           Full Stack Developer Based in India.</h1>
            <p>Iam a full stack developer from kerala</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me</div>
            <div className="hero-resume">My-Resume</div>
        </div>
    </div>
  )
} 

export default Hero
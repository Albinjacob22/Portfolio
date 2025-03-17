import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Full Stack Developer With over a decade of
              profeesional expertise in th field.Throughtout my career, I have
              had the privilehe of collaborationg with prestigious
              origanizations, contributing to their success and growth.{' '}
            </p>
            <p>
              my passion for full stack development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.{' '}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>React Js</p> <hr style={{ width: '70%' }} /></div>
            <div className="about-skill"><p>JavaScript</p> <hr style={{ width: '60%' }} /></div>
            <div className="about-skill"><p>Next Js</p> <hr style={{ width: '50%' }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
          <hr />
          <div className="about-achievement">
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
   
  );
};

export default About;

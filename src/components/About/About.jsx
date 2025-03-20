import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className="about">
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
              Experienced Full Stack Developer | 1+ Years of Expertise. With
              over a decade of professional experience in full-stack
              development, I have had the privilege of collaborating with
              prestigious organizations, contributing to their success and
              growth. My passion for building scalable, efficient, and
              innovative solutions drives me to continuously explore new
              technologies and best practices.
            </p>
            <p>
              Beyond my technical expertise, I bring enthusiasm, dedication, and
              a problem-solving mindset to every project, ensuring high-quality
              development and seamless user experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p> <hr style={{ width: '50%' }} />
            </div>
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

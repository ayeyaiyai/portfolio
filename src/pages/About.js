import React from 'react';
import { Link } from "react-router-dom";
import '../styles/About.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Headshot from '../images/headshot.jpeg';
import JavaScript from '../images/javascript-logo.png';
import HTML from '../images/html-logo.png';
import CSS from '../images/css-logo.svg';
import ReactLogo from '../images/react-logo.png';
import NodeLogo from '../images/node-logo.png';
import LinuxLogo from '../images/linux-logo.png';
import gitLogo from '../images/git-logo.svg';
import vsCodeLogo from '../images/vscode-logo.png';
import npmLogo from '../images/npm-logo.png';

function About () {
  return (
    <div className='about'>
      <Header />
      <div className='about-container'>
        
        <div className='profile-photo'>
            <img src={Headshot} alt="Headshot" className='headshot'/>
          </div>
        <div className='about-profile'>
          <div className='profile-title'>Hello, I'm <span className='blue-highlight'>Connor Gilbert</span>.</div>
          <div className='profile-bio'>
            <div className='bio-section'>I am a self-taught full-stack developer who began studying in 2022. I thoroughly enjoy problem-solving
            and turning complex tasks into simple, elegant solutions. Currently I am working primarily with React and JavaScript.
            </div>
            <div className='bio-section'>I am a life-long learner with interests ranging from analytical psychology, orangutan behavioral studies,
            scouring the web for obscure video games, and exercise/nutrition. I have always loved being online, so learning web development only seemed natural!</div>
            <div className='bio-section last-bio-section'>I'd love to get in <Link to={'/contact'} className='text-link'>contact</Link>!</div>
          </div>
          <div className='profile-title'>My Skills:</div>
          <div className='profile-bio'>
            <div className='skills-header'>Languages</div>
            <div className='bio-section'>
              <img src={JavaScript} alt ="JavaScript Logo" className='skill-img'/>
              <img src={HTML} alt ="HTML Logo" className='skill-img'/>
              <img src={CSS} alt ="CSS Logo" className='skill-img'/>
            </div>
            <div className='skills-header'>Tech</div>
            <div className='bio-section'>
              <img src={ReactLogo} alt ="React Logo" className='skill-img'/>
              <img src={NodeLogo} alt ="node.js Logo" className='skill-img'/>
            </div>
            <div className='skills-header'>Tools</div>
            <div className='bio-section last-bio-section'>
              <img src={LinuxLogo} alt ="Linux Logo" className='skill-img'/>
              <img src={gitLogo} alt ="git Logo" className='skill-img'/>
              <img src={vsCodeLogo} alt ="VSCode Logo" className='skill-img'/>
              <img src={npmLogo} alt ="npm Logo" className='skill-img'/>
            </div>
          </div>
          <div className='profile-bio portfolio-link'>
          <Link to={'/projects'}>View my Portfolio</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
import './styles/Intro.css';
import React from 'react';
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro">
      <div className="name-section">
        <div className="name-text intro-text fade-in-text">Connor</div>
        <div className="name-text intro-text fade-in-text">Gilbert</div>
        <div className="about-me-body intro-text fade-in-slow">I am a web developer with experience in react, html, css, javascript, and node.js</div>
      </div>
        
      <div className='link-section fade-in-slowest slide-in'>
        <div className='link-text'>
          <Link to={'/about'}>Get to know me</Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
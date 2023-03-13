import React from 'react';
import '../styles/Contact.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function Contact () {
  return (
    <div className='contact'>
      <Header />
      <div className='contact-body'>
        <div className='contact-title'>Contact <span className='magenta-text'>Me</span></div>
        <div className='contact-link-container'>
          <div className='contact-link-row row-one'>
            <div className='contact-link link'><Link to={'https://linkedin.com/in/connor-gilbert-21b3a3268'} target="_blank">linkedin</Link></div>
            <div className='contact-link link'><Link to={'mailto:connorgilbert77@gmail.com'}>email</Link></div>
          </div>

          <div className='contact-link-row'>
            <div className='contact-link link'><Link to={'https://github.com/ayeyaiyai'} target="_blank">github</Link></div>
            <div className='contact-link link'><Link to={'https://drive.google.com/file/d/1x0OcwT_kA697MBeha5XXlPH4cExWAfAQ/view?usp=sharing'} target="_blank">resume</Link></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
import React from 'react';
import '../styles/Header.css'
import { Link } from "react-router-dom";

function Header () {
  return (
    <div className='header'>
      <div className='header-left header-text'><Link to={'/'}>CG</Link></div>
      <div className='header-right'>
        <div className='header-link'><Link to={'/about'}>About</Link></div>
        <div className='header-link'><Link to={'/projects'}>Projects</Link></div>
        <div className='header-link'><Link to={'/contact'}>Contact</Link></div>
      </div>
    </div>
  )
}

export default Header
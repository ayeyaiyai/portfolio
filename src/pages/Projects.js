import React from 'react';
import '../styles/Projects.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import weatherAppImage from '../images/weather-app2.png';
import cvAppImage from '../images/cv-builder-thumbnail.png';
import pokeMemoryImage from '../images/poke-memory-thumbnail.png';
import monspierreImage from '../images/monspierre-thumbnail.png';

function Projects () {
  return (
    <div className='projects'>
      <Header />
      <div className='projects-container'>
        <div className='projects-title'>My <span className='magenta-text'>Projects</span></div>
        
        <div className='project-section-title'>Weather <span className='magenta-text'>App</span></div>
        <div className='project-section'>
          <div className='project-thumbnail section-left'><img src={weatherAppImage} alt='weather app thumbnail'/></div>
          <div className='project-description-section description-right'>
            <div className='project-description'>This is a weather app made using the OpenWeatherAPI. It defaults to
            the greatest city on earth - Columbus, Ohio. There is a search bar that enables the user to search for a city
            and a toggleable light mode.</div>
            <div className='link-section'>
              <div className='link link-left'><Link to={'https://ayeyaiyai.github.io/weather-app/'} target="_blank">Live Preview</Link></div>
              <div className='link'><Link to={'https://github.com/ayeyaiyai/weather-app'} target="_blank">github</Link></div>
            </div>
          </div>
        </div>

        <div className='project-section-title title-right'>Monspierre</div>
        <div className='project-section'>
        <div className='project-description-section section-left'>
            <div className='project-description'>This is a mock-up for a shopping website - Monspierre. It was made using
            vanilla JavaScript. It features 4 pages and a shopping cart.</div>
            <div className='link-section'>
              <div className='link link-left'><Link to={'https://ayeyaiyai.github.io/monspierre/'} target="_blank">Live Preview</Link></div>
              <div className='link'><Link to={'https://github.com/ayeyaiyai/monspierre'} target="_blank">github</Link></div>
            </div>
          </div>
          <div className='project-thumbnail'><img src={monspierreImage} alt='shop thumbnail'/></div>
        </div>

        <div className='project-section-title'>CV <span className='magenta-text'>Builder</span></div>
        <div className='project-section'>
          <div className='project-thumbnail section-left'><img src={cvAppImage} alt='cv app thumbnail'/></div>
          <div className='project-description-section description-right'>
            <div className='project-description'>This is a CV building app. It takes the users inputs via text fields, which it then
            displays on a CV template. It was built using React.</div>
            <div className='link-section'>
              <div className='link link-left'><Link to={'https://fantastic-stardust-789c73.netlify.app/'} target="_blank">Live Preview</Link></div>
              <div className='link'><Link to={'https://github.com/ayeyaiyai/cv-builder'} target="_blank">github</Link></div>
            </div>
          </div>
        </div>

        <div className='project-section-title title-right'>Portfolio</div>
        <div className='project-section'>
        <div className='project-description-section section-left'>
            <div className='project-description'>You're already here! This is my portfolio website. It was made
            using React and employs react-router functionality.</div>
            <div className='link-section'>
              <div className='link link-left'><Link to={'/'} target="_blank">Live Preview</Link></div>
              <div className='link'>github</div>
            </div>
          </div>
          <div className='project-thumbnail portfolio-thumbnail'>
            <div className='portfolio-thumbnail-text'>CG</div>
          </div>
        </div>

        <div className='project-section-title'>Memory <span className='magenta-text'>Game</span></div>
        <div className='project-section'>
          <div className='project-thumbnail section-left'><img src={pokeMemoryImage} alt='pokemon memory app thumbnail'/></div>
          <div className='project-description-section description-right'>
            <div className='project-description'>This is a memory game. It tasks the user with clicking 8 pokemon in a row
            without clicking the same one twice. Upon clicking a Pokemon their arrangement is scrambled and the clicked Pokemon is 
            stored. It was made using React.
            </div>
            <div className='link-section'>
              <div className='link link-left'><Link to={'https://pokememory-connor.netlify.app/'} target="_blank">Live Preview</Link></div>
              <div className='link'><Link to={'https://github.com/ayeyaiyai/pokememory'} target="_blank">github</Link></div>
            </div>
          </div>
        </div>

        <Footer />
      
      </div>
    </div>
  )
}

export default Projects
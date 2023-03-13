import './App.css';
import React from 'react';
import  Intro  from './Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Intro />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;

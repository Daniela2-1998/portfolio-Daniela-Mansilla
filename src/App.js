import React from 'react';

import './App.css';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Proyects from './components/Proyects';
import Hobbies from './components/Hobbies';
import MoreAboutMe from './components/MoreAboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Services />
      <Proyects />
      <Hobbies />
      <MoreAboutMe />
      <Contact />
    </>
  );
}


export default App;

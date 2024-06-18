import React from 'react';
import Bio from './components/Bio';
import Interests from './components/Interests';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';

import Skills from './components/Skills';
import './styles/main.css'; // main CSS file
import './components/Bio.css'; // Import Bio CSS file
import './components/Resume.css'; // Import Resume CSS file
import './components/Interests.css'; // Import Interests CSS file
import './components/SkillsWheel.css'; // Import SkillsWheel CSS file

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio Public</h1>
        <nav>
          <ul>
            <li><a href="#bio">About</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="bio"><Bio /></section>
        <section id="interests"><Interests /></section>
        <section id="resume"><Resume /></section>

        <section id="skills"><Skills /></section>
        <section id="contact"><ContactForm /></section>
      </main>
    </div>
  );
}

export default App;

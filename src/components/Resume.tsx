import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <p>
        I am a diligent and dedicated computer science student at Boston University's Metropolitan College, with a GPA of around 3.8. I have taken courses in web development, focusing on HTML, CSS, JavaScript, TypeScript, and React. My coursework has equipped me with the skills to build dynamic and responsive websites and applications. I am passionate about applying these skills in practical projects and contributing to the tech industry.
      </p>
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="Tingtao_Zhang_Resume.pdf" className="download-button">
        Download CV
      </a>
    </div>
  );
};

export default Resume;

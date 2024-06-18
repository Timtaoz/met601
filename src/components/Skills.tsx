import React from 'react';
import SkillsWheel from './SkillsWheel';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <p>
        Throughout this course, I have gained proficiency in several key web development technologies. These include:
      </p>
      <ul>
        <li><strong>HTML5:</strong> Structuring web content in a semantic and accessible manner.</li>
        <li><strong>CSS3:</strong> Styling and laying out web pages with modern techniques such as Flexbox and Grid.</li>
        <li><strong>JavaScript:</strong> Creating interactive and dynamic web experiences.</li>
        <li><strong>TypeScript:</strong> Enhancing JavaScript with static typing for better maintainability and scalability.</li>
        <li><strong>React:</strong> Building component-based user interfaces with efficient state management.</li>
      </ul>
      <p>
        These skills have enabled me to develop comprehensive and responsive web applications, and I am excited to continue building on this foundation.
      </p>
      <SkillsWheel />
    </div>
  );
};

export default Skills;

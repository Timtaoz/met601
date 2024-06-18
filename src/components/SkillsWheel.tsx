import React, { useState } from 'react';
import './SkillsWheel.css';

const SkillsWheel = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'];
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const newRotation = rotation + (Math.random() * 360 + 360 * 3);
    setRotation(newRotation);
  };

  return (
    <div className="skills-wheel-container">
      <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
        {skills.map((skill, index) => (
          <div key={index} className="wheel-segment">
            {skill}
          </div>
        ))}
      </div>
      <button className="spin-button" onClick={spinWheel}>Spin</button>
    </div>
  );
};

export default SkillsWheel;

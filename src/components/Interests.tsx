import React from 'react';
import './Interests.css';

const Interests = () => {
  return (
    <div className="interests">
      <h2>My Interests</h2>
      <div className="interests-content">
        <div className="interest-card">
          <img src={`${process.env.PUBLIC_URL}/images/ai.jpg`} alt="Artificial Intelligence" />
          <h3>Artificial Intelligence</h3>
          <p>
            AI fascinates me because of its potential to revolutionize industries and solve complex problems. I enjoy staying up-to-date with the latest trends in this field and continuously improving my knowledge and abilities.
          </p>
        </div>
        <div className="interest-card">
          <img src={`${process.env.PUBLIC_URL}/images/fullstack.jpg`} alt="Full-Stack Development" />
          <h3>Full-Stack Development</h3>
          <p>
            Full-stack development allows me to create end-to-end solutions, bringing both front-end and back-end skills together. I am passionate about building comprehensive applications and exploring new technologies in this area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interests;

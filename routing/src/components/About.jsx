import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  );
};

export default About;

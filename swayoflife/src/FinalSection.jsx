// In FinalSection.jsx

import React from 'react';
import './FinalSection.css'; // We'll create this file next for styling

const FinalSection = () => {
  return (
    <section className="final-section">
      <p className="final-quote">
        “There is no path that does not lead to home.”
      </p>
      <a 
        href="https://github.com/shaadart/sway-of-life" 
        className="blender-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Explore the Blender Project
      </a>
    </section>
  );
};

export default FinalSection;
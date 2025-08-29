 

import React from 'react';

const Episode = ({ title, theme, videoSrc, poeticText }) => {
  return (
    <section className="episode-section">
      <div className="video-block">
        <video 
          src={videoSrc} 
          className="episode-video" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
      </div>
      <div className="text-block">
        <h2 className="episode-title">{title}</h2>
        <p className="episode-theme">{theme}</p>
        <p className="episode-text">{poeticText}</p>
      </div>
    </section>
  );
};

export default Episode;
// In your existing Episode.jsx file

import React from 'react';
import { motion } from 'framer-motion'; // <-- 1. Add this import

function Episodes({ title, theme, videoSrc }) {
  return (
    // 2. Change 'section' to 'motion.section' and add the animation props
    <motion.section
      className="episode-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="video-container">
        {/* I've updated your video tag to autoplay like the previous examples */}
        <video 
          className="video-player" 
          src={videoSrc} 
          autoPlay 
          muted 
          loop 
          playsInline 
        />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{theme}</p>
      </div>
    </motion.section>
  );
}

export default Episodes;
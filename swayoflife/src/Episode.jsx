// In Episode.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Episode = ({ title, ep, theme, videoSrc, cues }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const activeCue = cues.find(
    (cue) => currentTime >= cue.start && currentTime <= cue.end
  );

  useEffect(() => {
    const videoElement = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );
    if (videoElement) {
      observer.observe(videoElement);
    }
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <motion.section
      className="episode-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="video-block">
        <video
          ref={videoRef}
          src={videoSrc}
          className="episode-video"
          loop
          muted
          playsInline
          controls
          onTimeUpdate={handleTimeUpdate}
        />
      </div>

      <div className="text-block">
         <motion.h2 className="episode-title">
          <span className="episode-number">{ep}</span>
          <span className="episode-main-title">{title}</span>
        </motion.h2>
        
        <div className="poetic-text-container">
          <AnimatePresence>
            {activeCue && (
              <motion.div
                key={activeCue.start}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {activeCue.lines.map((line, index) => (
                  <p key={index} className="poetic-line">
                    {line}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Episode;
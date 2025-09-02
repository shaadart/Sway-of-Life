// In Episode.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Episode = ({ title, ep, theme, videoSrc, cues, id }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const activeCue = cues && cues.find(
    (cue) => currentTime >= cue.start && currentTime <= cue.end
  );

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch(() => { });
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <motion.section
      id={id}
      className="episode-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="video-title-wrapper">
        <motion.h2 className="episode-title">
          <span className="episode-number">{ep}</span>
          <span className="episode-main-title">{title}</span>
        </motion.h2>

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
      </div>

      <div className="text-block">
        <div className="poetic-text-container">
          <AnimatePresence>
            {activeCue && (
              <motion.div
                key={activeCue.start}
                className="lines-container"
              >
                {activeCue.lines.map((line, index) => (
                  <motion.p
                    key={index}
                    className="poetic-line"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.3 // Add 0.3s delay for each subsequent line
                    }}
                  >
                    {line}
                  </motion.p>
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
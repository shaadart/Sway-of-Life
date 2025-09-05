import React from 'react';
import { episodes } from './episodesData'; // Import the data
import Episode from './Episode'; // Import our Episode component
import './App.css'; // We'll add styles later
import FinalSection from './FinalSection';
import { FaPlay } from 'react-icons/fa';

function App() {
  return (
    <div className="app-container">
      {/* Hero section with a big title covering whole screen, with a litle description and a button */}
      <header className="hero">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '0.5rem' }}>
          <video
            src="/dandelion.webm"
            className="dandelion-video"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '233px',
              height: '144px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              position: 'static',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        </div>
        <h1 style={{ textAlign: 'center' }}>Sway of Life</h1>
        <p style={{ textAlign: 'center' }}>follows a single dandelion seed as it travels through different environments, each episode serving as a meditation on a core theme of life</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="play-button" onClick={() => {
            document.getElementById('episode3').scrollIntoView({ behavior: 'smooth' });
          }}><FaPlay /><span>Play</span></button>
        </div>
      </header>
      {/* We will add the <Dandelion /> component here later */}

      <main className="episode-list">
        {episodes.map(episode => (
          <Episode
            key={episode.id} // A unique key is important for lists in React
            id={episode.ep === "Ep 3" ? "episode3" : ""}
            title={episode.title}
            ep={episode.ep}
            theme={episode.theme}
            videoSrc={episode.videoSrc}
            cues={episode.cues}
          />
        ))}
      </main>

      {/* We will add the <FinalSection /> component here later */}
      <FinalSection />
    </div>
  );
}

export default App;
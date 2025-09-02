import React from 'react';
import { episodes } from './episodesData'; // Import the data
import Episode from './Episode'; // Import our Episode component
import './App.css'; // We'll add styles later
import FinalSection from './FinalSection';

function App() {
  return (
    <div className="app-container">
      {/* Hero section with a big title covering whole screen, with a litle description and a button */}
      <header className="hero">
        <h1>Sway of Life</h1>
        <p>follows a single dandelion seed as it travels through different environments, each episode serving as a meditation on a core theme of life</p>
        <button onClick={() => {
          document.getElementById('episode2').scrollIntoView({ behavior: 'smooth' });
        }}>Watch Now!</button>
      </header>
      {/* We will add the <Dandelion /> component here later */}

      <main className="episode-list">
        {episodes.map(episode => (
          <Episode
            key={episode.id} // A unique key is important for lists in React
            id={episode.ep === "Ep 2" ? "episode2" : ""}
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
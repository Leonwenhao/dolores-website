import React from 'react';
import './App.css';
import campfireImg from './campfire.jpg'; // Make sure the image is in the same folder

function App() {
  return (
    <div className="App">

      {/* VISUAL LAYER */}
      <div className="bg-container">
        {/* The blurred background uses the image as a CSS background property */}
        <div
          className="bg-blur"
          style={{ backgroundImage: `url(${campfireImg})` }}
        />
        <img
          src={campfireImg}
          className="bg-sharp"
          alt="Dolores Research Campfire"
        />
      </div>

      {/* TEXTURE LAYER (SVG Noise Pattern) */}
      <div className="noise">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* POEM LAYER */}
      <div className="poem-wrapper">
        <span className="line">The hard work is over.</span>
        <span className="line">The heavy lifting is done.</span>
        <span className="line">All that remains is the art of being human.</span>
        <span className="line">Come warm your hands by the new fire.</span>
      </div>

      {/* BRAND FOOTER */}
      <div className="footer">Dolores Research</div>

    </div>
  );
}

export default App;

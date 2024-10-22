import React from "react";
import "../Pages_Sub1.css";

const Page5Sub2: React.FC = () => {
  const handleClose = () => {
    console.log("Page closed");
    window.history.back();
  };

  return (
    <div className="subpage-container">
      <div className="content-container">
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>
        <h1>Jaya Sri Maha Bodhi</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Jaya Sri Maha Bodhi View 1" />
          <img src="/path-to-image2.jpg" alt="Jaya Sri Maha Bodhi View 2" />
          <img src="/path-to-image3.jpg" alt="Jaya Sri Maha Bodhi View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Step into the sacred grounds of Jaya Sri Maha Bodhi, a revered
              Buddhist temple housing a sapling from the original Bodhi Tree
              under which Lord Buddha attained enlightenment. This ancient
              temple is a must-visit destination for anyone interested in
              history, art, and culture. As you explore the temple's many
              buildings and ruins, you'll discover a treasure trove of ancient
              artifacts and relics, including intricate carvings, sculptures,
              and murals. The temple's stunning architecture and unique design
              make it a must-visit destination for anyone interested in history
              and architecture. Jaya Sri Maha Bodhi is a place of great
              historical significance, and visitors can feel the energy and
              tranquility of the temple as they explore its many wonders.
              Whether you're a history enthusiast, an art lover, or simply
              looking for a unique experience, Jaya Sri Maha Bodhi is a
              must-visit destination in Sri Lanka.
            </p>
          </div>
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Anuradhapura, Sri Lanka</li>
              <li>Best Time to Visit: April to August</li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Ruwanwelisaya Stupa</li>
              <li>Abhayagiri Dagaba</li>
              <li>Thuparamaya Stupa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub2;

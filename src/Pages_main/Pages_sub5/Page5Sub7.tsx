import React from "react";
import "../Pages_Sub1.css";

const Page5Sub7: React.FC = () => {
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
        <h1>Twin Ponds (Kuttam Pokuna)</h1>
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Twin Ponds View 1" />
          <img src="/path-to-image2.jpg" alt="Twin Ponds View 2" />
          <img src="/path-to-image3.jpg" alt="Twin Ponds View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Discover the serene Twin Ponds, a stunning ancient wonder that
              dates back to the 8th century. This historic site is a testament
              to Sri Lanka's rich cultural heritage, offering breathtaking views
              of the surrounding landscape. The ponds' unique architecture and
              stunning artwork make it a must-visit destination for anyone
              interested in history, art, and culture. As you explore the ponds'
              many ruins, you'll discover a treasure trove of ancient artifacts
              and relics, including intricate carvings, sculptures, and murals.
              The ponds' tranquil atmosphere is further enhanced by the
              surrounding gardens, which are home to a variety of flora and
              fauna. Twin Ponds is a place of great historical significance, and
              visitors can feel the energy and tranquility of the ponds as they
              explore its many wonders. Whether you're a history enthusiast, an
              art lover, or simply looking for a peaceful retreat, Twin Ponds is
              a must-visit destination in Sri Lanka.
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
              <li>Jaya Sri Maha Bodhi</li>
              <li>Isurumuniya Temple</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub7;

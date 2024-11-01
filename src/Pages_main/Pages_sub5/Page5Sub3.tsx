import React from "react";
import "../Pages_Sub1.css";
import Isurumuniya1 from "../../NCP_Images/Isurumuniya1.jpg";
import Isurumuniya2 from "../../NCP_Images/Isurumuniya2.jpg";
import Isurumuniya3 from "../../NCP_Images/Isurumuniya3.jpg";

const Page5Sub3: React.FC = () => {
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
        <h1>Isurumuniya Temple</h1>
        <div className="image-section">
          <img src={Isurumuniya1} alt="Isurumuniya Temple View 1" />
          <img src={Isurumuniya2} alt="Isurumuniya Temple View 2" />
          <img src={Isurumuniya3} alt="Isurumuniya Temple View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
            <p>
              Uncover the secrets of Isurumuniya Temple, a 2,000-year-old rock
              temple adorned with intricate carvings and sculptures. This
              ancient wonder is a testament to Sri Lanka's rich cultural
              heritage, offering breathtaking views of the surrounding
              landscape. The temple's unique architecture and stunning artwork
              make it a must-visit destination for anyone interested in history,
              art, and culture. As you explore the temple's many caves, you'll
              discover a treasure trove of ancient artifacts and relics,
              including intricate carvings, sculptures, and murals. The temple's
              walls are adorned with stunning frescoes, which depict various
              scenes from Buddhist mythology. The temple's tranquil atmosphere
              is further enhanced by the surrounding gardens, which are home to
              a variety of flora and fauna. Isurumuniya Temple is a place of
              great historical significance, and visitors can feel the energy
              and tranquility of the temple as they explore its many wonders.
              Whether you're a history enthusiast, an art lover, or simply
              looking for a peaceful retreat, Isurumuniya Temple is a must-visit
              destination in Sri Lanka.
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
              <li>Jaya Sri Maha Bodhi</li>
              <li>Ruwanwelisaya Stupa</li>
              <li>Abhayagiri Dagaba</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub3;

import React from "react";
import "../Pages_sub1.css"; // Assuming your updated styles are in this file
import nallur1 from "/src/Pages_main/Northern img/1-nallur.jpg";
import nallur2 from "/src/Pages_main/Northern img/2-nallur.jpg";
import nallur3 from "/src/Pages_main/Northern img/3-nallur.png";

const Page7Sub1: React.FC = () => {
  const handleClose = () => {
    console.log("Page closed");
    window.history.back(); // This will take the user back to the previous page.
  };

  return (
    <div className="subpage-container">
      <div className="content-container">
        {/* Close Button */}
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>

        {/* Title */}
        <h1>Nallur Kandaswamy Temple</h1>

        {/* Image Section - Upper Half */}
        <ImageSection />

        {/* Lower Section (60:40 Split) */}
        <div className="lower-section">
          <Description />
          <AdditionalDetails />
        </div>
      </div>
    </div>
  );
};

// Image Section Component
const ImageSection: React.FC = () => {
  return (
    <div className="image-section">
      <img src={nallur1} alt="Nallur Kandaswamy Temple View 1" />
      <img src={nallur2} alt="Nallur Kandaswamy Temple View 2" />
      <img src={nallur3} alt="Nallur Kandaswamy Temple View 3" />
    </div>
  );
};

// Description Component
const Description: React.FC = () => {
  return (
    <div className="description">
      <p>
        Nallur Kandaswamy Temple, located in Jaffna, Sri Lanka, is a significant Hindu temple dedicated to Lord Murugan, originally established in the 14th century and rebuilt in 1783. Renowned for its striking Dravidian architecture, the temple features a towering gopuram adorned with colorful sculptures, intricate carvings, and multiple shrines. It serves as a cultural hub, particularly during its annual festival, which attracts thousands of devotees with vibrant processions and rituals. The temple's serene surroundings make it a tranquil site for worship and reflection, embodying the rich spiritual and cultural heritage of the Tamil Hindu community in the region.
      </p>
    </div>
  );
};

// Additional Details Component
const AdditionalDetails: React.FC = () => {
  return (
    <div className="additional-details">
      <h3>Travel Information</h3>
      <ul>
        <li>Location: Jaffna, Sri Lanka</li>
        <li>Best Time to Visit: July to September</li>
        <li>
          <a
            href="https://maps.app.goo.gl/WY43hxymbFrgibqA8"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </li>
      </ul>
      <h3>Nearby Attractions</h3>
      <ul>
        <li>Jaffna fort</li>
        <li>Pannai</li>
        <li>Jaffna public library</li>
      </ul>
    </div>
  );
};

export default Page7Sub1;
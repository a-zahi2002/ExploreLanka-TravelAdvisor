import React from "react";
import "../Pages_sub1.css"; // Assuming your updated styles are in this file
import pl1 from "/src/Pages_main/Northern img/pl1.jpg";
import pl2 from "/src/Pages_main/Northern img/pl2.jpg";
import pl3 from "/src/Pages_main/Northern img/pl3.jpg";

const Page7Sub2: React.FC = () => {
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
        <h1>Jaffna Public Library</h1>

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
      <img src={pl1} alt="Jaffna Public Library View 1" />
      <img src={pl2} alt="Jaffna Public Library View 2" />
      <img src={pl3} alt="Jaffna Public Library View 3" />
    </div>
  );
};

// Description Component
const Description: React.FC = () => {
  return (
    <div className="description">
      <p>
      The Jaffna Public Library, established in 1931 in Jaffna, Sri Lanka, is a historically significant institution known for its vast collection of Tamil literature and manuscripts, with over 97,000 volumes at its peak. Notable for its Indo-Saracenic architectural style, the library became a symbol of Tamil identity and scholarship until it was tragically destroyed in a fire in 1981 during civil unrest. After extensive efforts, it was rebuilt and reopened in 2003, retaining its cultural essence while modernizing its facilities. Today, the library continues to promote literacy and education, hosting various cultural events and workshops, serving as a vital resource for the local community and a symbol of resilience and cultural revival in Jaffna.
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
        <li>Best Time to Visit: any time</li>
        <li>
          <a
            href="https://maps.app.goo.gl/mYh9LGMB1Lr4yKPM8"
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
        <li>Nallur Kandaswamy temple</li>
      </ul>
    </div>
  );
};

export default Page7Sub2;
import React from "react";
import "../Pages_sub1.css";

const Page7Sub16: React.FC = () => {
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
        <h1>Muripukulam</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/mk1.jpg" alt="mk View 1" />
          <img src="/src/Pages_main/Northern img/mk2.jpg" alt="mk View 2" />
          <img src="/src/Pages_main/Northern img/mk3.jpg" alt="mk View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Muripukulam, located in the Jaffna Peninsula of Sri Lanka, is a picturesque water tank known for its scenic beauty and significance to the local community. This ancient reservoir plays a crucial role in irrigation, supporting agriculture in the surrounding areas, particularly in a region where water resources can be limited. The tank is often surrounded by lush vegetation and offers a serene environment, making it a popular spot for relaxation and nature walks. Muripukulam is also a haven for birdwatchers, as it attracts various migratory birds and local wildlife, contributing to its ecological importance. Additionally, the tank serves as a reminder of the region's rich history of water management and agricultural practices, highlighting the cultural heritage of Jaffna.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Kilinochchi, Sri Lanka</li>
              <li>Best Time to Visit: April to August</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/chgbWPP8rjqnubQW7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Iranaimadu tank</li>
              <li>Kilinochchi war memorial</li>
              <li>Elephant pass</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub16;
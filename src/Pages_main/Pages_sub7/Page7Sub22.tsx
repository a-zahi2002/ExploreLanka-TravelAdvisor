import React from "react";
import "../Pages_sub1.css";

const Page7Sub22: React.FC = () => {
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
        <h1>Archaeological Museum</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/am1.jpg" alt="am View 1" />
          <img src="/src/Pages_main/Northern img/am2.jpg" alt="am View 2" />
          <img src="/src/Pages_main/Northern img/am3.jpg" alt="am View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>The Archaeological Museum in Vavuniya, Sri Lanka, is an important cultural institution that showcases the rich archaeological heritage of the region. Established to preserve and display artifacts from various historical periods, the museum features a diverse collection, including ancient pottery, tools, sculptures, and inscriptions that highlight the area's significance in Sri Lanka's history. The exhibits provide insights into the early civilizations that inhabited the region, their lifestyles, and cultural practices. The museum is also a valuable resource for researchers and students interested in archaeology and history. With its educational focus and well-curated displays, the Archaeological Museum in Vavuniya serves as a key destination for those looking to understand the historical and cultural context of northern Sri Lanka.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Vavuniya</li>
              <li>Best Time to Visit: Anytime</li>
                <a
                  href="https://maps.app.goo.gl/c2xHJUH1uS8FEoV26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Vavuniyakulam</li>
              <li>Kalvari church</li>
              <li>Pavatkulam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub22;
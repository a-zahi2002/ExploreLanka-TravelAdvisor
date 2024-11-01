import React from "react";
import "../Pages_sub1.css";

const Page7Sub24: React.FC = () => {
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
        <h1>Kalvari church</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/kc1.jpg" alt="kc View 1" />
          <img src="/src/Pages_main/Northern img/kc2.jpg" alt="kc View 2" />
          <img src="/src/Pages_main/Northern img/kc3.jpg" alt="kc View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Kalvari Church, located in Vavuniya, Sri Lanka, is a significant Roman Catholic church known for its striking architecture and spiritual importance in the local community. This church serves as a place of worship and a gathering point for the faithful, offering a serene environment for reflection and prayer. The interior features beautiful stained glass windows and religious artwork, enhancing its peaceful ambiance. Kalvari Church hosts various religious ceremonies and festivals throughout the year, attracting both local devotees and visitors. Its role in promoting community solidarity and faith makes it an important cultural and spiritual landmark in Vavuniya, reflecting the region's rich religious heritage.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Vavuniya, Sri Lanka</li>
              <li>Best Time to Visit: Anytime</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/PRZ4sNjHfVrg26VC7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Vavuniyakulam</li>
              <li>Pavatkulam</li>
              <li>Archaeological museum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub24;
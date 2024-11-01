import React from "react";
import "../Pages_sub1.css";

const Page7Sub7: React.FC = () => {
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
        <h1>Nainativu</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/nt1.jpg" alt="Nainativu View 1" />
          <img src="/src/Pages_main/Northern img/nt2.jpg" alt="Nainativu View 2" />
          <img src="/src/Pages_main/Northern img/nt3.jpg" alt="Nainativu View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Nainativu, an enchanting island located off the northeastern coast of Jaffna, Sri Lanka, is known for its rich spiritual heritage and natural beauty. The island is home to the revered Nainativu Naguleswaram Temple, a significant Hindu pilgrimage site dedicated to Lord Shiva, attracting devotees from across the region. In addition to its spiritual significance, Nainativu boasts picturesque landscapes, pristine beaches, and crystal-clear waters, making it an ideal spot for relaxation and exploration. The island can be accessed by ferry, adding to its charm as a tranquil getaway. With its blend of cultural and natural attractions, Nainativu offers visitors a unique experience steeped in history and spirituality.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Nainativu, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/tmbiFTE5rmz27onv6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Neduntivu(Delft Island)</li>
              <li>Analativu(another small Island)</li>
              <li>Kankesanthurai</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub7;
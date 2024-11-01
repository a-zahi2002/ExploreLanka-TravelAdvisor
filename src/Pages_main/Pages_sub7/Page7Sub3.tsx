import React from "react";
import "../Pages_sub1.css";
import jf1 from "/src/Pages_main/Northern img/jf1.jpg";
import jf2 from "/src/Pages_main/Northern img/jf2.jpg";
import jf3 from "/src/Pages_main/Northern img/jf3.jpg";

const Page7Sub3: React.FC = () => {
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
        <h1>Jaffna Fort</h1>
        <div className="image-section">
          <img src={jf1} alt="Jaffna fort View 1" />
          <img src={jf2} alt="Jaffna fort View 2" />
          <img src={jf3} alt="Jaffna fort View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Jaffna Fort, built by the Portuguese in the 17th century and later expanded by the Dutch, is a historic landmark located in the heart of Jaffna, Sri Lanka. This star-shaped fortification offers stunning views of the surrounding landscape and the nearby coastline. Once a strategic military stronghold, the fort features impressive ramparts, bastions, and a well-preserved chapel. Visitors can explore its rich history through the remnants of the walls and structures, which reflect the colonial influences of the Portuguese and Dutch eras. Jaffna Fort is not only a significant cultural heritage site but also a popular destination for tourists seeking to immerse themselves in the region's history while enjoying the scenic beauty of Jaffna.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Jaffna, Sri Lanka</li>
              <li>Best Time to Visit: Anytime</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/zRLHJxVYJ4t4mvFdA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Pannai beach</li>
              <li>Nallur Kandaswamy Temple</li>
              <li>Jaffna Public Library</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub3;

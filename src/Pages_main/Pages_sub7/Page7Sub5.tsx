import React from "react";
import "../Pages_sub1.css";

const Page7Sub5: React.FC = () => {
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
        <h1>Kankesanthurai</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/kks1.jpg" alt="kks View 1" />
          <img src="/src/Pages_main/Northern img/kks2.jpeg" alt="kks View 2" />
          <img src="/src/Pages_main/Northern img/kks3.jpg" alt="kks Prasada View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Kankesanthurai, located in the Jaffna Peninsula of Sri Lanka, is a coastal town known for its stunning beaches and historical significance. Once a thriving port during colonial times, Kankesanthurai is home to the remains of an old railway station and the Kankesanthurai Harbour, which has been a vital shipping point. The area is also notable for the nearby Kankesanthurai Lighthouse, which offers beautiful views of the coastline. The serene beaches, combined with opportunities for swimming and fishing, make it a popular destination for both locals and tourists. Additionally, the town's proximity to the sacred Hindu temple of Naguleswaram adds to its cultural significance, attracting pilgrims and visitors interested in exploring the spiritual heritage of the region.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Jaffna, Sri Lanka</li>
              <li>Best Time to Visit: January to August</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/eCr2T6SQ7giWZAfz8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>keerimalai pond,Naguleswaram temple</li>
              <li>KKS Harbour</li>
              <li>KKS light house</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub5;

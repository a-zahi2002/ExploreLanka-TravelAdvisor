import React from "react";
import "../Pages_sub1.css";

const Page7Sub20: React.FC = () => {
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
        <h1>Puthukudiyirupu War Museum</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/pwm1.jpg" alt="pwm View 1" />
          <img src="/src/Pages_main/Northern img/pwm2.jpg" alt="pwm View 2" />
          <img src="/src/Pages_main/Northern img/pwm3.jpg" alt="pwm View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>The Puthukudiyiruppu War Museum, located in the town of Puthukudiyiruppu (or Puthukudiyiruppu) in northern Sri Lanka, serves as a poignant reminder of the Sri Lankan Civil War. Established to commemorate the conflict and its impact on the local community, the museum showcases a collection of artifacts, photographs, and exhibits that depict the struggles and sacrifices experienced during the war. The museum aims to educate visitors about the historical context of the conflict and its aftermath, promoting awareness and understanding of the region's turbulent past. With its focus on reconciliation and healing, the Puthukudiyiruppu War Museum stands as a significant site for those seeking to learn about the effects of war on society and the importance of peace in post-conflict Sri Lanka.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Mullativu, Sri Lanka</li>
              <li>Best Time to Visit: January to October</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/fmiNp1tgMM4rbrwP8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Naayaru lagoon</li>
              <li>Submarine yard</li>
              <li>Chundikulam beach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub20;
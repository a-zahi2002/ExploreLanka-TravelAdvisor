import React from "react";
import "../Pages_sub1.css";

const Page7Sub19: React.FC = () => {
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
        <h1>Submarine Yard</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/smy1.jpg" alt="smy View 1" />
          <img src="/src/Pages_main/Northern img/smy2.jpg" alt="smy View 2" />
          <img src="/src/Pages_main/Northern img/smy3.jpg" alt="smy View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>The Submarine Yard in Vanni, located in the northern region of Sri Lanka, is a notable historical site associated with the country's naval history. Established during the civil conflict, it was primarily used for the repair and maintenance of naval vessels, including submarines. The yard reflects the strategic importance of the area during the war, serving as a crucial point for naval operations. Today, the site is a reminder of the region's complex history and its role in the maritime security of Sri Lanka. Visitors to the Submarine Yard can gain insights into the naval heritage of the country, although access may be limited due to its military significance. The surrounding area is also rich in natural beauty, making it a fascinating place for those interested in both history and the scenic landscapes of Vanni.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Mullativu, Sri Lanka</li>
              <li>Best Time to Visit: January to July</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/jzuEnkZiyY9cyJ1P8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Puthukudiyirupu war museum</li>
              <li>Chundikulam beach</li>
              <li>Naayaru lagoon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub19;
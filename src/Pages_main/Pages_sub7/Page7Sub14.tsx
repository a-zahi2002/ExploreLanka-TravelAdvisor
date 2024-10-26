import React from "react";
import "../Pages_sub1.css";

const Page7Sub14: React.FC = () => {
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
        <h1>Elephant Pass saltern</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/eps1.jpg" alt="eps View 1" />
          <img src="/src/Pages_main/Northern img/eps2.jpg" alt="eps View 2" />
          <img src="/src/Pages_main/Northern img/eps3.jpg" alt="eps View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Elephant Pass Saltern, located near the town of Elephant Pass in Sri Lanka, is a unique and historically significant site known for its salt production. Established during British colonial times, the saltern is situated in a coastal area where seawater is evaporated to harvest salt, a vital resource in the region. The picturesque landscape features vast salt pans that create striking visuals, especially when reflecting the sun. Elephant Pass Saltern is not only important for its economic contributions but also serves as a fascinating destination for visitors interested in local industry and traditional methods of salt extraction. The area is rich in biodiversity, attracting various bird species, making it a good spot for nature enthusiasts as well. Overall, Elephant Pass Saltern offers a blend of cultural heritage, industry, and natural beauty, appealing to both tourists and locals alike.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Kilinochchi, Sri Lanka</li>
              <li>Best Time to Visit: April to August</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/8MhVnFTpVM8ts1jC8"
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
              <li>Muripukulam</li>
              <li>Chundikulam beach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub14;
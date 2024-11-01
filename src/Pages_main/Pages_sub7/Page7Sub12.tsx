import React from "react";
import "../Pages_sub1.css";

const Page7Sub12: React.FC = () => {
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
        <h1>Mannar Kunchikulam Bridge</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/mkb1.jpg" alt="mkb View 1" />
          <img src="/src/Pages_main/Northern img/mkb2.jpg" alt="mkb View 2" />
          <img src="/src/Pages_main/Northern img/mkb3.jpg" alt="mkb View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Mannar Kunchikulam Bridge, located in Mannar, Sri Lanka, is a remarkable structure that connects the mainland to Kunchikulam, enhancing accessibility to this scenic area. The bridge is notable for its picturesque views of the surrounding landscapes, including lush greenery and tranquil waters. It plays a vital role in the local community, facilitating transportation and trade while also serving as a popular spot for photography and leisurely strolls. The area around the bridge is rich in biodiversity, attracting nature enthusiasts and birdwatchers, particularly those interested in the nearby wetlands and wildlife. With its blend of natural beauty and practical importance, the Mannar Kunchikulam Bridge is a charming destination for visitors exploring the region.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Mannar, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/8UgzXybkos91KzPu6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Thiruketheeswaram shivan temple</li>
              <li>Mannar Madu Madha church</li>
              <li>Mannar light house</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub12;
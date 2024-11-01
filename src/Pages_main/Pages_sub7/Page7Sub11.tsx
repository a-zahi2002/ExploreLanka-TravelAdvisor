import React from "react";
import "../Pages_sub1.css";

const Page7Sub11: React.FC = () => {
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
        <h1>Mannar Light House</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/mlh1.jpg" alt="MLH View 1" />
          <img src="/src/Pages_main/Northern img/mlh2.jpg" alt="MLH View 2" />
          <img src="/src/Pages_main/Northern img/mlh3.jpg" alt="MLH View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Mannar Lighthouse, located on Mannar Island in Sri Lanka, is a historic coastal landmark that offers stunning views of the surrounding landscape and ocean. Built in 1858 during the British colonial period, the lighthouse stands 47 meters tall and is one of the tallest in Sri Lanka. Visitors can explore the area around the lighthouse, enjoying the scenic beauty of the coastline and the rich biodiversity of the nearby wetlands. The lighthouse, with its striking white and red stripes, serves as both a navigation aid and a picturesque backdrop for photography. Its historical significance, combined with the serene natural surroundings, makes Mannar Lighthouse a popular destination for tourists seeking to experience the maritime heritage and tranquil beauty of the region.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Mannar, Sri Lanka</li>
              <li>Best Time to Visit: April to September</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/wfDKzPYVA1A5ekDH8"
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
              <li>Mannar kunchikulam bridge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub11;
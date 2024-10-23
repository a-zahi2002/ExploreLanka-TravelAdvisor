import React from "react";
import "../Pages_Sub1.css"; // Assuming your updated styles are in this file
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page9Sub1: React.FC = () => {
  const handleClose = () => {
    // Logic to close the page (e.g., navigate back or hide the component)
    console.log("Page closed");
    window.history.back(); // This will take the user back to the previous page.
  };

  return (
    <div className="subpage-container">
      {" "}
      {/* Use scoped class name */}
      <div className="content-container">
        {/* Close Button */}
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>

        {/* Title */}
        <h1>Gangaramaya Temple</h1>

        {/* Image Section - Upper Half */}
        <div className="image-section">
          <img src={gangaramaya1} alt="Gangaramaya View 1" />
          <img src={gangaramaya2} alt="Gangaramaya View 2"/>
          <img src={gangaramaya3} alt="Gangaramaya View 3"/>
          
        </div>

        {/* Lower Section (60:40 Split) */}
        <div className="lower-section">
          {/* Left - 60% for Description */}
          <div className="description">
            <p>
            Located near the scenic Beira Lake in the heart of Colombo, Sri Lanka, Gangaramaya Temple is one of the city’s most iconic religious sites. This Buddhist temple is a mix of modern and traditional architecture, offering visitors a glimpse into the country’s rich spiritual history. The temple complex houses a museum, a library, a school of Buddhist learning, and a meditation hall, making it a cultural hub in addition to its religious significance.<br />The temple is also renowned for its intricate statues, impressive collection of Buddhist artifacts, and the annual Navam Perahera, a grand procession featuring elephants, traditional dancers, and drummers.
            </p>
          </div>

          {/* Right - 40% for Additional Details */}
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to Apri</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Gangaramaya+Temple/@6.9167145,79.8566456,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2596b9982dc43:0x3a35356ebd5eed36!8m2!3d6.9167145!4d79.8566456!16s%2Fm%2F0j1hppj?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Beira Lake</li>
              <li>Viharamahadevi Park</li>
              <li>Colombo National Museum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub1;

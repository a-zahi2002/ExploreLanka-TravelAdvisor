import React from "react";
import "../Pages_Sub1.css"; 
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page1Sub5: React.FC = () => {
  const handleClose = () => {
    
    console.log("Page closed");
    window.history.back(); 
  };

  return (
    <div className="subpage-container">
      {" "}
    
      <div className="content-container">
        
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>

        <h1>Kithulgala Belilena Cave</h1>

       
        <div className="image-section">
          <img src={gangaramaya1} alt="Gangaramaya View 1" />
          <img src={gangaramaya2} alt="Gangaramaya View 2"/>
          <img src={gangaramaya3} alt="Gangaramaya View 3"/>
          
        </div>


        <div className="lower-section">

          <div className="description">
            <p>Great World’s End Drop is situated within the Horton Plains National Park in Nuwara Eliya. It is a popular tourist attraction in Nuwara Eliya and in the entire country, while being the most visited part of the Horton Plains National Park.
           Great World’s End has a vertical drop of approximately 1200 m from a cliff. A 4 km trail through Horton Plains leads to this point of the cliff.Getting to Great World’s End Drop
From Nuwara Eliya travel along the Blackpool-Ambewela-Pattipola-Horton Plain Road and turn right at Ambewela junction on to World’s End Road to reach the Great World’s End Drop which is located within the Horton Plains National Park in Nuwara Eliya.</p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to Apri</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/%E0%B6%B6%E0%B7%99%E0%B6%BD%E0%B7%92%E0%B6%BD%E0%B7%99%E0%B6%B1+%E0%B6%9C%E0%B7%94%E0%B7%84%E0%B7%8F%E0%B7%80/@7.0022424,80.4332065,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae30aa625268cd5:0x7a42e05641fe704a!8m2!3d7.0022371!4d80.4357814!16s%2Fm%2F04f5gmm?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
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

export default Page1Sub5;

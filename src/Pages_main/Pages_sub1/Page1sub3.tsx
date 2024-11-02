import React from "react";
import "../Pages_Sub1.css"; 
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page1Sub3: React.FC = () => {
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

        <h1>Great World’s End Drop</h1>

       
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
              <li>Location: Hortam Plains, Sri Lanka</li>
              <li>Best Time to Visit: November to Apri</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Great+World's+End+Drop/@6.7802607,80.7918923,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae389cf46cb3f67:0x818e33bb2a32673a!8m2!3d6.7802554!4d80.7944672!16s%2Fm%2F0108wb56?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
            <li>Bibile Rock</li>
              <li>Bopath Ella</li>
              <li>Sri Pada</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1Sub3;

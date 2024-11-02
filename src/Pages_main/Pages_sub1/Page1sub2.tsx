import React from "react";
import "../Pages_Sub1.css"; 
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page1Sub2: React.FC = () => {
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

        <h1>Adam’s Peak/Sri Pada</h1>

       
        <div className="image-section">
          <img src={gangaramaya1} alt="Gangaramaya View 1" />
          <img src={gangaramaya2} alt="Gangaramaya View 2"/>
          <img src={gangaramaya3} alt="Gangaramaya View 3"/>
          
        </div>


        <div className="lower-section">

          <div className="description">
            <p>Sri Pada or Adam’s Peak is an ancient pilgrimage site, which has long attracted thousands of pilgrims from all faiths. This conical mountain is 7,360 feet (2,250 meters )high, soaring clear above the surrounding mountain ranges. The mountain is located in the southern reaches of the Central Highlands in the Ratnapura District and Nuwara Eliya district of the Sabaragamuwa Province and Central Province —lying about 40 km northeast of the city of Ratnapura and 32 km southwest of the city of Hatton. The surrounding region is largely forested hills, with no mountain of comparable size nearby.</p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Rathnapura, Sri Lanka</li>
              <li>Best Time to Visit: December to May</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/%E0%B7%81%E0%B7%8A%E2%80%8D%E0%B6%BB%E0%B7%93+%E0%B6%B4%E0%B7%8F%E0%B6%AF%E0%B6%BA/@6.809664,80.4890884,15z/data=!3m1!4b1!4m6!3m5!1s0x3ae3977589234b59:0x8723ad471d5b37dc!8m2!3d6.809643!4d80.4993882!16zL20vMDVncGM1?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
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

export default Page1Sub2;

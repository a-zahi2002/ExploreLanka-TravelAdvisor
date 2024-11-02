import React from "react";
import "../Pages_Sub1.css"; 
import gangaramaya1 from "/src/assets/western_img/gangaramaya-image1.jpg";
import gangaramaya2 from "/src/assets/western_img/gangaramaya-image2.webp";
import gangaramaya3 from "/src/assets/western_img/gangaramaya-image3.webp";


const Page1Sub6: React.FC = () => {
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

        <h1>Kirindi Ella Waterfall</h1>

       
        <div className="image-section">
          <img src={gangaramaya1} alt="Gangaramaya View 1" />
          <img src={gangaramaya2} alt="Gangaramaya View 2"/>
          <img src={gangaramaya3} alt="Gangaramaya View 3"/>
          
        </div>


        <div className="lower-section">

          <div className="description">
            <p>The source of this breath-taking, 116m-high fall is the Kirindi Ella (stream), which flows from its starting point 940m up the Kuttapitiya Mountain.
           The stream travels 13km before the cascading point in the Kaluwaramukalana Jungle.
            It then flows via the Denawaka River to the Kaluganga River, located in the Bambarakotuwa Jungle. Local villagers say that there is a picture of a tortoise etched into stone here.</p>
          </div>

          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to Apri</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/%E0%B6%9A%E0%B7%92%E0%B6%BB%E0%B7%92%E0%B6%B3%E0%B7%92+%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD/@6.6422497,80.561872,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae3ecbf3bf32647:0x7d07d26bad3595ad!8m2!3d6.6422444!4d80.5644469!16s%2Fg%2F11gmzlfk1b?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
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

export default Page1Sub6;

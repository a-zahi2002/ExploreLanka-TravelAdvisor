import React from "react";
import "../Pages_sub1.css";
import Ella1 from "/src/uva img/ella1.png";
import Ella2 from "/src/uva img/ella2.png";
import Ella3 from "/src/uva img/ella3.png";

const Page4Sub7: React.FC = () => {
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
        <h1>Ella Rock</h1>
        <div className="image-section">
          <img src={Ella1} alt="Ella View 1" />
          <img src={Ella2} alt="Ella View 2"/>
          <img src={Ella3} alt="Ella View 3"/>
        </div>
        <div className="lower-section">

          <div className="description">
        <p>
        Ella Rock is a remarkable natural attraction situated near the vibrant town of Ella in Sri Lanka’s central highlands. 
        This impressive peak offers stunning views and a rewarding hiking experience that captivates outdoor enthusiasts. 
        The adventure typically begins with a scenic trek through verdant tea plantations and lush forests, immersing visitors in the region's enchanting landscapes. 
        As you ascend, the breathtaking vistas of rolling hills and distant mountains unfold, creating a picturesque backdrop.
         Upon reaching the summit, hikers are greeted with a sweeping panorama that reveals a tapestry of terraced tea fields, emerald valleys, and occasionally, the shimmering coastline on clear days. 
         The area is teeming with biodiversity, where vibrant birds and playful butterflies enhance the natural beauty.
          The best times to visit Ella Rock are during sunrise or sunset, when the sky transforms into a canvas of soft pinks and oranges, casting a magical glow over the entire landscape and making the experience truly unforgettable.
   
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Rawanaella, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/SvGn9DKVN8ynnQFD6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Nine Arches Bridge</li>
              <li>Ravana Falls</li>
              <li>Diyaluma Falls</li>
            </ul>
          </div>
    </div>
    </div>
    </div>
  );
};

export default Page4Sub7;

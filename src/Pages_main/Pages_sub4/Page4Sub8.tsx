import React from "react";
import "../Pages_sub1.css";
import Pokuna1 from "/src/uva img/pokuna1.png";
import Pokuna2 from "/src/uva img/pokuna2.png";
import Pokuna3 from "/src/uva img/pokuna3.png";

const Page4Sub8: React.FC = () => {
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
        <h1>Nil Diya Pokuna</h1>
        <div className="image-section">
          <img src={Pokuna1} alt="Nildiya Pokuna View 1" />
          <img src={Pokuna2} alt="Nildiya Pokuna View 2"/>
          <img src={Pokuna3} alt="Nildiya Pokuna View 3"/>
        </div>
        <div className="lower-section">
        <div className="description">
        <p>
        Nil Diya Pokuna, also known as the "Blue Water Pond," is a hidden gem located near the town of Ella in Sri Lanka's central highlands. 
        This enchanting natural pool, nestled among lush greenery and surrounded by rocky cliffs, offers a serene escape for nature lovers and 
        adventure seekers. The journey to Nil Diya Pokuna typically involves a short trek through scenic trails, where visitors can enjoy the 
        vibrant flora and fauna of the region. As you approach the pond, the crystal-clear blue waters come into view, inviting you to take a
         refreshing dip or simply relax by the tranquil surroundings. 
         The beauty of the site is further enhanced by the sound of cascading water and the chorus of birdsong,
          creating a peaceful atmosphere. Ideal for a picnic or a leisurely afternoon, Nil Diya Pokuna is best experienced during the early morning 
          or late afternoon when the sunlight dances on the water, casting a magical glow over this idyllic setting.
    
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Udakirida, Sri Lanka</li>
              <li>Best Time to Visit:December to March</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/PPxSHrmeQ17AUYPE6"
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
              <li> Diyaluma Falls</li>
              <li>Ella Rock</li>
            </ul>
          </div>
    </div>
      </div>
    </div>
  );
};

export default Page4Sub8;

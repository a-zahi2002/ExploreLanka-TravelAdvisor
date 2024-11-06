import React from "react";
import "../Pages_sub1.css";
import Porawagala1 from "/src/uva img/porawagala1.png";
import Porawagala2 from "/src/uva img/porawagala2.png";
import Porawagala3 from "/src/uva img/porawagala3.png";

const Page4Sub6: React.FC = () => {
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
        <h1>Porawagala View Point</h1>
        <div className="image-section">
          <img src={Porawagala1} alt="Porawagala View Point  View 01" />
          <img src={Porawagala2} alt="Porawagala View Point  View 02" />
          <img src={Porawagala3} alt="Porawagala View Point  View 03" />
        </div>
        <div className="lower-section">
        <div className="description">
        <p>
        Porawagala View Point is a breathtaking natural vantage point located near the town of Bandarawela in 
the central highlands of Sri Lanka. Perched atop a rugged hilltop, Porawagala offers visitors panoramic 
vistas of the surrounding landscape, making it a popular destination for nature lovers and outdoor 
enthusiasts. The journey to Porawagala View Point often begins with a scenic drive through winding roads 
flanked by lush greenery and tea plantations, adding to the charm of the experience. As visitors ascend 
the hill, they are treated to sweeping views of the rolling hills, verdant valleys, and mist-covered peaks that 
characterize the region. Upon reaching the summit of Porawagala, travelers are greeted by a breathtaking 
panorama that stretches as far as the eye can see. The surrounding landscape unfolds like a patchwork 
quilt, with terraced tea estates, dense forests, and cascading waterfalls dotting the terrain below. On clear 
days, it is even possible to catch a glimpse of the distant coastline shimmering in the sunlight. The beauty 
of Porawagala View Point is not limited to its natural scenery; the area is also rich in biodiversity, with a 
variety of flora and fauna calling it home. Visitors may spot colorful birds flitting among the treetops, 
butterflies dancing in the breeze, and occasionally, even glimpses of elusive wildlife such as deer or 
monkeys. One of the best times to visit Porawagala View Point is at sunrise or sunset, when the sky is 
painted in hues of pink, orange, and gold, casting a warm glow over the landscape
    
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Badulla, Sri Lanka</li>
              <li>Best Time to Visit: January to April</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/6hjLWE9DRbJFsu8fA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Thangamale Bird Sanctuary </li>
              <li>Bambarakanda Falls </li>
              <li>Ella   </li>
              
            </ul>
          </div>
    </div>
      </div>
    </div>
  );
};

export default Page4Sub6;

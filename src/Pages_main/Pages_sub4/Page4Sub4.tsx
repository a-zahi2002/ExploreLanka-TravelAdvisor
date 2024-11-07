import React from "react";
import "../Pages_sub1.css";
import Diyaluma1 from "/src/uva img/diyaluma1.png";
import Diyaluma2 from "/src/uva img/diyaluma2.png";
import Diyaluma3 from "/src/uva img/diyaluma3.png";

const Page4Sub4: React.FC = () => {
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
        <h1>Diyaluma Falls</h1>
        <div className="image-section">
          <img src={Diyaluma1} alt="Diyaluma Falls View 01" />
          <img src={Diyaluma2} alt="Diyaluma Falls  View 02" />
          <img src={Diyaluma3} alt="Diyaluma Falls  View 03" />
        </div>
        <div className="lower-section">
        <div className="description">
        <p>
        Diyaluma Falls is a mesmerizing natural attraction situated amidst the scenic beauty of Sri Lanka's Badulla 
District, near the town of Koslanda. Renowned as the second highest waterfall in Sri Lanka, Diyaluma Falls 
cascades down a series of rocky ledges, creating a breathtaking spectacle that draws visitors from far and 
wide.
The journey to Diyaluma Falls is an adventure in itself, as travelers navigate through winding roads, verdant 
forests, and picturesque tea plantations. Along the way, glimpses of the cascading waters can be seen 
peeking through the lush foliage, heightening anticipation for the awe-inspiring sight that awaits.
Upon arrival, visitors are greeted by the thunderous roar of the waterfall and the cool mist that envelops 
the surrounding area, creating a refreshing oasis amidst the tropical heat. Diyaluma Falls plunges 
approximately 220 meters (722 feet) into a series of natural pools below, each more inviting than the last.
One of the highlights of a visit to Diyaluma Falls is the opportunity to swim in the crystal-clear waters of 
its natural pools. Adventurous souls can take a refreshing dip in the cool, invigorating waters, surrounded 
by the stunning beauty of their natural surroundings. For the more daring, there are even opportunities 
for cliff jumping into the deep pools below, adding an extra thrill to the experience.
Beyond its sheer natural beauty, Diyaluma Falls offers visitors the chance to immerse themselves in the 
tranquility of the wilderness. Surrounded by pristine forests and rugged terrain, the waterfall is a haven 
for hikers and nature enthusiasts, with several scenic trails leading to viewpoints offering panoramic vistas 
of the cascading waters and the lush landscape beyond.
       
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Koslanda, Sri Lanka</li>
              <li>Best Time to Visit:  May to September</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/7SSXsyYo461uvZTJA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Poonagala Tea Estate </li>
              <li>Haldummulla Viewpoint</li>
              <li>Buduruwagala Temple  </li>
              
            </ul>
          </div>
    </div>
      </div>
    </div>
  );
};

export default Page4Sub4;

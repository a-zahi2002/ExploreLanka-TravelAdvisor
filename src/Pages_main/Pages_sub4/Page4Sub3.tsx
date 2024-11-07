import React from "react";
import "../Pages_sub1.css";
import Bambarakanda1 from "/src/uva img/Bambarakanda1.jpg";
import Bambarakanda2 from "/src/uva img/Bambarakanda2.png";
import Bambarakanda3 from "/src/uva img/Bambarakanda3.png";
const Page4Sub3: React.FC = () => {
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
        <h1>Bambarakanda Falls</h1>
        <div className="image-section">
          <img src={Bambarakanda1} alt="Bambarakanda View 01" />
          <img src={Bambarakanda2} alt="Bambarakanda View 02" />
          <img src={Bambarakanda3} alt="Bambarakanda View 03" />
        </div>
        <div className="lower-section">
        <div className="description">
        <p>
        Bambarakanda Falls is a spectacular natural wonder nestled amidst the lush forests and rugged terrain of 
Sri Lanka's central highlands. As the tallest waterfall in Sri Lanka, Bambarakanda captivates visitors with its 
majestic beauty and awe-inspiring cascade, making it a must-visit destination for nature lovers and 
adventurers alike.
Located near the town of Haputale in the Badulla District, Bambarakanda Falls tumbles dramatically down 
a sheer cliff face, plunging approximately 263 meters (863 feet) into a rocky pool below. The sight of the 
cascading water, framed by verdant vegetation and misty spray, creates a mesmerizing spectacle that 
leaves visitors spellbound.
To reach Bambarakanda Falls, visitors embark on a scenic journey through winding roads and verdant 
valleys, passing through picturesque tea plantations and dense forests. Along the way, glimpses of the 
waterfall can be seen peeking through the foliage, heightening anticipation for the breathtaking sight that 
awaits.
Upon arrival, visitors are greeted by the thundering roar of the waterfall and the cool mist that envelops 
the surrounding area, creating a refreshing oasis amidst the tropical heat. The viewing platform offers a 
perfect vantage point to admire the sheer power and beauty of Bambarakanda Falls, while the rocky pool 
below invites adventurous souls to take a refreshing dip in its crystal-clear waters.
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Kalupahana, Sri Lanka</li>
              <li>Best Time to Visit: March to May</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/fxVNz3AXhtk6SQBV6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Horton Plains National Park </li>
              <li>Diyaluma Falls</li>
              <li>Ella Falls </li>
              
            </ul>
          </div>
    </div>
    </div>
    </div>
  );
};

export default Page4Sub3;

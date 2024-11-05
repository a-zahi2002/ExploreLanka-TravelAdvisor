import React from "react";
import "../Pages_sub1.css";
import nineArches1 from "/src/uva img/nineArches1.png";
import nineArches2 from "/src/uva img/nineArches2.png";
import nineArches3 from "/src/uva img/nineArches3.png";
const Page4Sub1: React.FC = () => {
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
        <h1>Nine Arches Railway Bridge</h1>
        <div className="image-section">
          <img src={nineArches1} alt="NineArches View 1" />
          <img src={nineArches2} alt="NineArches View 2" />
          <img src={nineArches3} alt="NineArches View 3" />
        </div>
        <div className="lower-section">
        <div className="description">
        <p>
          The Nine Arches Railway Bridge, also known as the Demodara Bridge, is
          an iconic architectural marvel located in the Ella region of Sri
          Lanka. Situated amidst the breathtaking landscapes of the island's
          central highlands, this magnificent bridge is a testament to the
          ingenuity of British colonial engineering. Constructed in the early
          20th century, the Nine Arches Railway Bridge spans a deep ravine,
          connecting the towns of Demodara and Ella. It is named for its nine
          majestic stone arches that gracefully span the chasm below. The bridge
          was designed to carry the railway line that connects Colombo, the
          capital city of Sri Lanka, with Badulla, a picturesque town nestled in
          the hill country. The bridge's design is a fusion of functionality and
          aesthetic appeal, with each arch meticulously crafted to withstand the
          weight of passing trains while also adding to the structure's
          grandeur. The stones used in its construction were quarried locally,
          blending seamlessly with the natural surroundings. One of the most
          remarkable aspects of the Nine Arches Railway Bridge is its location
          amidst verdant tea plantations and lush forests, offering panoramic
          views of the Ella Gap and the surrounding hills. Visitors often flock
          to the area to witness the spectacle of trains traversing the bridge
          against the backdrop of the scenic landscape. The bridge has become a
          popular tourist attraction, drawing photography enthusiasts, nature
          lovers, and railway enthusiasts alike. Walking along the railway
          tracks to reach viewpoints offering stunning vistas of the bridge is a
          popular activity among visitors. Despite its age, the Nine Arches
          Railway Bridge continues to serve as a vital transportation link,
          carrying both passengers and goods across the rugged terrain of Sri
          Lanka's hill country. Its enduring presence stands as a testament to
          the enduring legacy of colonial-era engineering and the timeless
          beauty of the island's natural landscapes.
        </p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Badulla, Sri Lanka</li>
              <li>Best Time to Visit: January to May</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/5rk5DLwcquukTpuP7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Ella Rock trail</li>
              <li>Ravana Falls</li>
              <li>Diyaluma Falls</li>
            </ul>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Page4Sub1;

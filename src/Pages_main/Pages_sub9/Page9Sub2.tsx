import React from "react";
import "../Pages_Sub1.css"; // Assuming your updated styles are in this file
import gallefacegreen01 from "/src/assets/western_img/gall_face_green01.jpg";
import gallefacegreen02 from  "/src/assets/western_img/gall_face_green02.jpg";
import gallefacegreen03 from "/src/assets/western_img/gall_face_green03.jpg";



const Page9Sub2: React.FC = () => {
  const handleClose = () => {
    // Logic to close the page (e.g., navigate back or hide the component)
    console.log("Page closed");
    window.history.back(); // This will take the user back to the previous page.
  };

  return (
    <div className="subpage-container">
      {" "}
      {/* Use scoped class name */}
      <div className="content-container">
        {/* Close Button */}
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>

        {/* Title */}
        <h1>Galle Face Green</h1>

        {/* Image Section - Upper Half */}
        <div className="image-section">
         <img src={gallefacegreen01} alt="Galle Face Green View 01"/>
         <img src={gallefacegreen02} alt="Galle Face Green View 02"/>
         <img src={gallefacegreen03} alt="Galle Face Green View 03"/>
          
        </div>

        {/* Lower Section (60:40 Split) */}
        <div className="lower-section">
          {/* Left - 60% for Description */}
          <div className="description">
            <p>
            Galle Face Green is a sprawling oceanfront urban park located along the coast of Colombo, Sri Lanka. This popular promenade stretches over half a kilometer, offering locals and tourists a breezy escape from the bustling city. Known for its wide-open spaces, stunning sunset views, and lively atmosphere, it's a favorite spot for families, couples, and those looking to unwind by the sea.<br />The area is vibrant in the evenings with street food vendors selling local delicacies such as "isso wade" (prawn fritters) and "kottu roti." Visitors often fly kites, play cricket, or simply relax on the grassy expanses while the sound of crashing waves creates a peaceful ambiance.
            </p>
          </div>

          {/* Right - 40% for Additional Details */}
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Colombo, Sri Lanka</li>
              <li>Best Time to Visit: November to April</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Galle+Face+Green/@6.9237882,79.8449324,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae259396a72f305:0x5e7e24c6bf94136f!8m2!3d6.9237882!4d79.8449324!16s%2Fm%2F02865rc?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Galle Face Hotel</li>
              <li>Dutch Hospital Shopping Precinct</li>
              <li>Gangaramaya Temple</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub2;

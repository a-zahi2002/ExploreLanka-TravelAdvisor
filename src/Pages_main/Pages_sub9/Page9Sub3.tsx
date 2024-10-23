import React from "react";
import "../Pages_Sub1.css"; // Assuming your updated styles are in this file
import viharamahadevi01 from "/src/assets/western_img/viharamaha_devi_park01.jpg";
import viharamahadevi02 from  "/src/assets/western_img/viharamaha_devi_park02.jpg";
import viharamahadevi03 from "/src/assets/western_img/viharamaha_devi_park03.jpg";



const Page9Sub3: React.FC = () => {
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
        <h1>Vihara Maha Devi Park</h1>

        {/* Image Section - Upper Half */}
        <div className="image-section">
         <img src={viharamahadevi01} alt="ViharaMahe Devi Park View 01"/>
         <img src={viharamahadevi02} alt="ViharaMaha Devi Park View 02"/>
         <img src={viharamahadevi03} alt="ViharaMaha Devi Park View 03"/>
          
        </div>

        {/* Lower Section (60:40 Split) */}
        <div className="lower-section">
          {/* Left - 60% for Description */}
          <div className="description">
            <p>
            Viharamahadevi Park, the largest and oldest park in Colombo, is a lush, green oasis in the heart of the city. Originally named "Victoria Park" during British colonial rule, it was later renamed after Queen Viharamahadevi, a famous historical figure in Sri Lanka. The park is a favorite spot for both locals and tourists, offering well-maintained gardens, shaded walkways, and peaceful spots to relax amidst nature.<br />The park is home to a variety of flora and fauna, including beautiful flowering trees, fountains, and statues. One of its prominent features is the massive golden Buddha statue that overlooks the park, adding a spiritual touch to its calm environment. There are also playgrounds for children, a small zoo, and seasonal flower shows, making it a family-friendly destination.
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
                  href="https://www.google.com/maps/place/Viharamahadevi+Park/@6.9133907,79.8617401,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2596e71b4ec89:0xa73dae1670be42dc!8m2!3d6.9133907!4d79.8617401!16s%2Fm%2F02pj7fg?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Colombo National Museum</li>
              <li>Independence Square</li>
              <li>Gangaramaya Temple</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub3;

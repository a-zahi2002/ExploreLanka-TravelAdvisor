import React from "react";
import "../Pages_Sub1.css"; // Assuming your updated styles are in this file
import beiralake01 from "/src/assets/western_img/beira_lake01.jpeg";
import beiralake02 from  "/src/assets/western_img/beira_lake02.jpg";
import beiralake03 from "/src/assets/western_img/beira_lake03.jpg";



const Page9Sub6: React.FC = () => {
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
        <h1>Beira Lake</h1>

        {/* Image Section - Upper Half */}
        <div className="image-section">
         <img src={beiralake01} alt="Beira Lake View 01"/>
         <img src={beiralake02} alt="Beira Lake View 02"/>
         <img src={beiralake03} alt="Beira Lake View 03"/>
          
        </div>

        {/* Lower Section (60:40 Split) */}
        <div className="lower-section">
          {/* Left - 60% for Description */}
          <div className="description">
            <p>
            Beira Lake is a tranquil body of water located in the heart of Colombo, offering a peaceful escape amidst the bustling city. This scenic lake has a long history dating back to the Portuguese and British colonial periods, when it was used for both defensive and commercial purposes. Today, it is a popular recreational spot, where visitors can enjoy leisurely boat rides, stroll along the lakeside paths, or simply take in the serene views.<br />The most iconic feature of Beira Lake is the small island in the center, home to the picturesque Seema Malakaya, a Buddhist temple that was designed by renowned architect Geoffrey Bawa. The temple, with its stunning reflection on the lake, is a serene place for meditation and contemplation. The surrounding greenery and birdlife, such as cormorants and pelicans, add to the lake’s peaceful charm.
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
                  href="https://www.google.com/search?sca_esv=b8f7a68888e6939d&sxsrf=ADLYWIIT5M16F2IU7yQ9gi6BI8mXZxV48w:1729692251048&q=beira+lake+colombo&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J5fCQuDw5vrzPt_cVO2GgWUj9lYp6rkuKNKs7T0vX7Q8Lk7PDqB_d8U_Xw31dTwojDY7cqVsV6GpboX7KXB_SoxUQ1YD3A4nRZp1XtoYQXZ-2Nd4CommC3EfX_t35MfEMa0mC_w&sa=X&ved=2ahUKEwjP18bh1aSJAxV5hq8BHWACFHUQ0pQJegQIExAB&biw=1536&bih=730&dpr=1.25#eim=CAEQDhoRNi45MjQ3MjY0NTAwMDAwMjgiETc5Ljg1MzU4NDI5OTk5OTk3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Gangaramaya Temple</li>
              <li>Viharamahadevi Park</li>
              <li>Galle Face Green</li>
              <li>Arcade Independence Square</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Sub6;

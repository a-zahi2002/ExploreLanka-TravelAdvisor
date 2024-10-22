import React from "react";
import "../Pages_Sub1.css"; // Assuming your updated styles are in this file

const Page5Sub1: React.FC = () => {
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
        <h1>Ruwanwelisaya Stupa</h1>

        {/* Image Section - Upper Half */}
        <div className="image-section">
          <img src="/path-to-image1.jpg" alt="Ruwanwelisaya View 1" />
          <img src="/path-to-image2.jpg" alt="Ruwanwelisaya View 2" />
          <img src="/path-to-image3.jpg" alt="Ruwanwelisaya View 3" />
        </div>

        {/* Lower Section (60:40 Split) */}
        <div className="lower-section">
          {/* Left - 60% for Description */}
          <div className="description">
            <p>
              Marvel at the majestic Ruwanwelisaya Stupa, a stunning ancient
              wonder that dates back to the 2nd century BC. This sacred site is
              a must-visit destination for anyone interested in history, art,
              and culture. As you explore the stupa's many levels and ruins,
              you'll discover a treasure trove of ancient artifacts and relics,
              including intricate carvings, sculptures, and murals. The stupa's
              stunning architecture and unique design make it a must-visit
              destination for anyone interested in history and architecture.
              Ruwanwelisaya Stupa is a place of great historical significance,
              and visitors can feel the energy and tranquility of the stupa as
              they explore its many wonders. Whether you're a history
              enthusiast, an art lover, or simply looking for a unique
              experience, Ruwanwelisaya Stupa is a must-visit destination in Sri
              Lanka.
            </p>
          </div>

          {/* Right - 40% for Additional Details */}
          <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Anuradhapura, Sri Lanka</li>
              <li>Best Time to Visit: April to August</li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Jaya Sri Maha Bodhi</li>
              <li>Abhayagiri Dagaba</li>
              <li>Thuparamaya Stupa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5Sub1;

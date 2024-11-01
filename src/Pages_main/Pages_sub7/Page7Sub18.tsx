import React from "react";
import "../Pages_sub1.css";

const Page7Sub18: React.FC = () => {
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
        <h1>Chundikulam Beach</h1>
        <div className="image-section">
          <img src="/src/Pages_main/Northern img/CB1.jpg" alt="cb View 1" />
          <img src="/src/Pages_main/Northern img/CB2.jpg" alt="cb View 2" />
          <img src="/src/Pages_main/Northern img/CB3.jpg" alt="cb View 3" />
        </div>
        <div className="lower-section">
          <div className="description">
        <p>Chundikulam Beach, located on the northeastern coast of Jaffna Peninsula in Sri Lanka, is a serene and picturesque destination known for its pristine sands and tranquil waters. This relatively untouched beach offers a peaceful escape for visitors seeking relaxation and natural beauty. The area is characterized by its stunning coastal scenery, including gentle waves, lush vegetation, and vibrant sunsets. Chundikulam Beach is ideal for leisurely strolls, picnics, and enjoying the local flora and fauna, including various bird species. With its calm atmosphere and scenic surroundings, the beach provides an opportunity to experience the untouched charm of the Jaffna coastline, making it a hidden gem for both locals and tourists.</p>
      </div>
      <div className="additional-details">
            <h3>Travel Information</h3>
            <ul>
              <li>Location: Mullativu, Sri Lanka</li>
              <li>Best Time to Visit: February to October</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/bdB12LacC8VmHiWR8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
            <h3>Nearby Attractions</h3>
            <ul>
              <li>Submarine yard</li>
              <li>Puthukudiyirupu War Museum</li>
              <li>Naayaru lagoon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Sub18;
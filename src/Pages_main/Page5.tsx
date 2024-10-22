import React from "react";
import "./Page.css";
import TileGrid5 from "./TileGrid5";
import { useNavigate } from "react-router-dom";

const Page5: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <div className="page">
      <p className="topic">North Central Province-Sri Lanka</p>
      <br></br> <br></br>
      <p className="paragraph">
        Discover the Timeless Wonders of Sri Lanka's North Central Province
      </p>
      <p>
        The North Central Province of Sri Lanka is a treasure trove of history,
        culture, and natural beauty, home to the country’s first two ancient
        capitals—Anuradhapura and Polonnaruwa. As the cradle of Sri Lankan
        civilization, this province offers visitors a journey through time,
        showcasing grand stupas, intricately carved statues, royal palaces, and
        revered religious sites. Both Anuradhapura and Polonnaruwa are UNESCO
        World Heritage Sites, reflecting their immense historical and cultural
        significance. Tourism in the North Central Province blends the allure of
        ancient architecture with breathtaking landscapes, including serene
        reservoirs and lush national parks teeming with wildlife. Whether you
        are seeking spiritual enrichment, a glimpse into the past, or an
        adventure amidst nature, this region provides a rich and immersive
        travel experience, making it an essential destination for any visitor to
        Sri Lanka.
      </p>
      <TileGrid5 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
    </div>
  );
};

export default Page5;

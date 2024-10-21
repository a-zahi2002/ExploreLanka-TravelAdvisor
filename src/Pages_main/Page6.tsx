import React from "react";
import "./Page.css";
import TileGrid6 from "./TileGrid6";
import { useNavigate } from "react-router-dom";

const Page6: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <p className="topic">Eastern Province-Sri Lanka</p>
      <br></br> <br></br>
      <p className="paragraph">
        Unveiling the Beauty and Rich Heritage of Sri Lanka's East Coast
      </p>
      <p>
        The Eastern Province of Sri Lanka is a captivating blend of natural
        beauty, cultural heritage, and adventure, making it a must-visit
        destination for travelers. From world-renowned surfing spots like Arugam
        Bay to the tranquil beaches of Pasikudah and Nilaveli, the province
        offers pristine coastlines and crystal-clear waters. Visitors can
        explore historic landmarks such as Fort Frederick and Koneswaram Temple,
        experience the serenity of Marble Beach, and embark on wildlife
        adventures in Kumana National Park. Rich in history, culture, and
        untouched landscapes, the Eastern Province is perfect for those seeking
        both relaxation and exploration on Sri Lanka’s stunning east coast.
      </p>
      <TileGrid6 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
    </div>
  );
};

export default Page6;

import React from "react";
import "./Page.css";
import TileGrid2 from "./TileGrid2";
import { useNavigate } from "react-router-dom";

const Page2: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1 className="topic">North Western Province-Sri Lanka</h1>
      <p className="paragraph">
        Explore the Charms of North Western Province, Sri Lanka
      </p>
      <p>
        The North Western Province, often known as Wayamba, is a region of Sri
        Lanka rich in cultural heritage and natural beauty. Famous for its
        ancient Buddhist temples like Ridi Viharaya and Munneswaram, the
        province offers travelers a deep dive into Sri Lanka's spiritual past.
        From the bustling city of Kurunegala, surrounded by towering rock
        formations, to the scenic coconut plantations and pristine beaches of
        Puttalam, the province is a perfect blend of history, nature, and
        adventure. Visitors can also explore Wilpattu National Park, home to
        leopards and elephants, making it a great destination for wildlife
        enthusiasts. Whether you seek cultural discoveries or outdoor
        adventures, the North Western Province offers something for every type
        of traveler.
      </p>
      <TileGrid2 />
      <button onClick={() => navigate(-1)}>Close</button>{" "}
    </div>
  );
};

export default Page2;

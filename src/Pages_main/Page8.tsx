import React from "react";
import "./Page.css";
import TileGrid8 from "./TileGrid8";
import { useNavigate } from "react-router-dom";

const Page8: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <p className="topic">Central Province-Sri Lanka</p>
      <p className="paragraph">
        Exploring the Cultural and Natural Beauty of Sri Lanka's Central
        Province
      </p>
      <p>
        The Central Province of Sri Lanka is a mountainous region known for its
        stunning landscapes, tea plantations, and cool climate. Its capital,
        Kandy, is home to the sacred Temple of the Tooth, a UNESCO World
        Heritage Site. The province also includes the popular tourist
        destinations of Nuwara Eliya, known for its colonial charm, and Matale,
        famous for spice gardens. The region's rich cultural heritage, scenic
        beauty, and biodiversity make it a significant part of Sri Lanka’s
        history and economy.
      </p>
      <TileGrid8 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
    </div>
  );
};

export default Page8;

import React from "react";
import "./Page.css";
import TileGrid4 from "./TileGrid4";
import { useNavigate } from "react-router-dom";

const Page4: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <p className="topic">Uva Province-Sri Lanka</p>
      <p className="paragraph">
        Discover the beauty of Uva Province, Sri Lanka
      </p>
      <p>
        The Uva Province is one of the nine provinces of Sri Lanka. The province
        has an area of 8,500 km² and a population of 1,266,463, making it the
        2nd least populated province. The provincial capital is Badulla. Uva is
        bordered by the Eastern, Southern, Sabaragamuwa, and Central provinces.
      </p>
      <TileGrid4 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page4;

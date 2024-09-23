import React from "react";
import "./Page.css";
import TileGrid2 from "./TileGrid2";
import { useNavigate } from "react-router-dom";

const Page2: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>Page 2</h1>
      <TileGrid2 />
      <button onClick={() => navigate(-1)}>Close</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page2;

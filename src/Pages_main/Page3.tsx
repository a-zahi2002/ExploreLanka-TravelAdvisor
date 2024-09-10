import React from "react";
import "./Page.css";
import TileGrid3 from "./TileGrid3";
import { useNavigate } from "react-router-dom";

const Page3: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>Page 3</h1>
      <TileGrid3 />
      <button onClick={() => navigate(-1)}>Close</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page3;

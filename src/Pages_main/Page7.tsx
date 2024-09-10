import React from "react";
import "./Page.css";
import TileGrid7 from "./TileGrid7";
import { useNavigate } from "react-router-dom";

const Page7: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>Page 7</h1>
      <TileGrid7 />
      <button onClick={() => navigate(-1)}>Close</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page7;

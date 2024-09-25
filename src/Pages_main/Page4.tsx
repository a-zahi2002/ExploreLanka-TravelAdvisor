import React from "react";
import "./Page.css";
import TileGrid4 from "./TileGrid4";
import { useNavigate } from "react-router-dom";

const Page4: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>Page 4</h1>
      <TileGrid4 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page4;

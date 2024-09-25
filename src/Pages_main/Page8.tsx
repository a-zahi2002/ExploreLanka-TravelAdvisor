import React from "react";
import "./Page.css";
import TileGrid8 from "./TileGrid8";
import { useNavigate } from "react-router-dom";

const Page8: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <h1>Page 8</h1>
      <TileGrid8 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
      {/* Better for navigating back */}
    </div>
  );
};

export default Page8;

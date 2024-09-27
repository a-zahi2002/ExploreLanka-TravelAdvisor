import React from "react";
import "./Page.css";
import TileGrid3 from "./TileGrid3";
import { useNavigate } from "react-router-dom";

const Page3: React.FC = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook

  return (
    <div className="page">
      <p className="topic"> Southern Province-Sri Lanka</p>
      <p className="paragraph">
        Discover the Charms of Southern Province, Sri Lanka.
      </p>
      <p>
        Southern Province, Sri Lanka, is a vibrant region comprised of several
        districts, including Galle, Matara, and Hambantota. Known for its
        breathtaking beaches and rich cultural history, Galle features the
        famous Dutch Fort, while Matara boasts beautiful coastlines and lively
        markets. Hambantota is recognized for its wildlife and stunning natural
        landscapes. This province offers a perfect mix of adventure, relaxation,
        and exploration, making it an ideal destination for all types of
        travelers.
      </p>
      <TileGrid3 />
      <button onClick={() => navigate(-1)}>Back</button>{" "}
    </div>
  );
};

export default Page3;

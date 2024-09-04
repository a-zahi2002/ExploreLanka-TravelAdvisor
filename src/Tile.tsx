import React from "react";
import { Link } from "react-router-dom";
import "./Tile.css";

interface TileProps {
  image: string;
  description: string;
  page: string;
}

const Tile: React.FC<TileProps> = ({ image, description, page }) => {
  return (
    <Link to={page}>
      <div className="tile">
        <img src={image} alt="Tile Image" />
        <div>{description}</div>
      </div>
    </Link>
  );
};

export default Tile;

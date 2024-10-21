import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Tile.css";

interface TileProps {
  image: string;
  description: string;
  page: string; // This prop will be the route to navigate to
}

const Tile: React.FC<TileProps> = ({ image, description, page }) => {
  return (
    <Link to={page} className="tile">
      {" "}
      {/* Wrap the entire tile in a Link */}
      <img src={image} alt={description} /> {/* Use description for alt text */}
      <div>{description}</div>
    </Link>
  );
};

export default Tile;

import React from "react";
import Tile from "./Tile"; // Ensure Tile is imported

const SubTileGrid: React.FC<{
  tiles: Array<{ image: string; description: string; page: string }>;
}> = ({ tiles }) => {
  return (
    <div className="sub-tile-grid">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          image={tile.image}
          description={tile.description}
          page={tile.page}
        />
      ))}
    </div>
  );
};

export default SubTileGrid;

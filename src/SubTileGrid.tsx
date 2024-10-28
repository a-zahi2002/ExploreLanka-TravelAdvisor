import React, { useContext } from "react";
import { SearchContext } from "./SearchContext";
import Tile from "./Tile";

const SubTileGrid: React.FC = () => {
  const { searchQuery, tileData } = useContext(SearchContext);

  const filteredTiles = tileData.filter((tile) =>
    tile.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="tile-grid">
      {filteredTiles.length > 0 ? (
        filteredTiles.map((tile, index) => (
          <Tile
            key={index}
            image={tile.image}
            description={tile.description}
            page={tile.page}
          />
        ))
      ) : (
        <p className="no-results">No results found.</p>
      )}
    </div>
  );
};

export default SubTileGrid;

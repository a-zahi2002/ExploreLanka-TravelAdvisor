import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page2Sub1 from "./Pages_sub2/Page2Sub1";
import Page2Sub2 from "./Pages_sub2/Page2Sub2";
import Page2Sub3 from "./Pages_sub2/Page2Sub3";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "Page2Sub1", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "Page2Sub2", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page2Sub3", // Note: Removed the leading '/'
  },
  // Add more tile data as needed
];

const TileGrid2: React.FC = () => {
  return (
    <div>
      {/* Main tile grid for subpages */}
      <div className="tile-grid">
        {tileData.map((tile, index) => (
          <Tile
            key={index}
            image={tile.image}
            description={tile.description}
            page={tile.page}
          />
        ))}
      </div>

      {/* Routes for the subpages */}
      <Routes>
        <Route path="Page2Sub1" element={<Page2Sub1 />} />
        <Route path="Page2Sub2" element={<Page2Sub2 />} />
        <Route path="Page2Sub3" element={<Page2Sub3 />} />
      </Routes>
    </div>
  );
};

export default TileGrid2;

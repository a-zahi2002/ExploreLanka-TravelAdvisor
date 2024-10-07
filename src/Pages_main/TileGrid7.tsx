import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page7Sub1 from "./Pages_sub7/Page7Sub1";
import Page7Sub2 from "./Pages_sub7/Page7Sub2";
import Page7Sub3 from "./Pages_sub7/Page7Sub3";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData7: TileData[] = [
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "Page7Sub1",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "Page7Sub2",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page7Sub3",
  },
  // Add more tile data as needed
];

const TileGrid7: React.FC = () => {
  return (
    <div>
      <div className="tile-grid">
        {tileData7.map((tile, index) => (
          <Tile
            key={index}
            image={tile.image}
            description={tile.description}
            page={tile.page}
          />
        ))}
      </div>

      <Routes>
        <Route path="Page7Sub1" element={<Page7Sub1 />} />
        <Route path="Page7Sub2" element={<Page7Sub2 />} />
        <Route path="Page7Sub3" element={<Page7Sub3 />} />
      </Routes>
    </div>
  );
};

export { tileData7 };
export default TileGrid7;

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page1sub1 from "./Pages_sub1/Page1Sub1";
import Page1sub2 from "./Pages_sub1/Page1sub2";
import Page1sub3 from "./Pages_sub1/Page1sub3";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "/page1sub1",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "/page1sub2",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "/page1sub3",
  },
  // Add more tile data as needed
];

const TileGrid1: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
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
        }
      />
      <Route path="/page1sub1" element={<Page1sub1 />} />
      <Route path="/page1sub2" element={<Page1sub2 />} />
      <Route path="/page1sub3" element={<Page1sub3 />} />
      <Route path="*" element={<div>404: Page Not Found</div>} />
    </Routes>
  );
};

export default TileGrid1;

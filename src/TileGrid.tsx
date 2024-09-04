import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./TileGrid.css";
import Tile from "./Tile";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";

interface TileData {
  image: string;
  description: string;
  page: string; // Add a new property to store the page URL
}

const tileData: TileData[] = [
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "/page1",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "/page2",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "/page3",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 4",
    page: "/page4",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 5",
    page: "/page5",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 6",
    page: "/page6",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 7",
    page: "/page7",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 8",
    page: "/page8",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 9",
    page: "/page9",
  },
];

const TileGrid: React.FC = () => {
  return (
    <BrowserRouter>
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
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/page9" element={<Page9 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TileGrid;

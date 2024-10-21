import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page8Sub1 from "./Pages_sub8/Page8Sub1";
import Page8Sub2 from "./Pages_sub8/Page8Sub2";
import Page8Sub3 from "./Pages_sub8/Page8Sub3";
import Page8Sub4 from "./Pages_sub8/Page8Sub4";
import Page8Sub5 from "./Pages_sub8/Page8Sub5";
import Page8Sub6 from "./Pages_sub8/Page8Sub6";
import Page8Sub7 from "./Pages_sub8/Page8Sub7";
import Page8Sub8 from "./Pages_sub8/Page8Sub8";
import Page8Sub9 from "./Pages_sub8/Page8Sub9";
import Page8Sub10 from "./Pages_sub8/Page8Sub10";
import Page8Sub11 from "./Pages_sub8/Page8Sub11";
import Page8Sub12 from "./Pages_sub8/Page8Sub12";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData8: TileData[] = [
  {
    image: "/src/assets/central img/1.jpg",
    description: "Sembuwatta Lake",
    page: "Page8Sub1",
  },
  {
    image: "/src/assets/central img/2.jpg",
    description: "Riverston",
    page: "Page8Sub2",
  },
  {
    image: "/src/assets/central img/3.jpg",
    description: "Wasgamuwa National Park",
    page: "Page8Sub3",
  },
  {
    image: "/src/assets/central img/4.jpg",
    description: "Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
    page: "Page8Sub4",
  },
  {
    image: "/src/assets/central img/5.jpg",
    description: "Royal Botanical Gardens, Peradeniya",
    page: "Page8Sub5",
  },
  {
    image: "/src/assets/central img/6.jpg",
    description: "Udawatta Kele Sanctuary",
    page: "Page8Sub6",
  },
  {
    image: "/src/assets/central img/7.jpg",
    description: "Horton Plains National Park & World's End",
    page: "Page8Sub7",
  },
  {
    image: "/src/assets/central img/8.jpg",
    description: "Gregory Lake",
    page: "Page8Sub8",
  },
  {
    image: "/src/assets/central img/9.jpg",
    description: "Seetha Amman Temple",
    page: "Page8Sub9",
  },
  {
    image: "/src/assets/central img/10.jpg",
    description: "Ceylon Tea Museum",
    page: "Page8Sub10",
  },
  {
    image: "/src/assets/central img/11.jpg",
    description: "Dambulla Cave Temple",
    page: "Page8Sub11",
  },
  {
    image: "/src/assets/central img/12.jpg",
    description: "St. Clair’s Falls",
    page: "Page8Sub12",
  },
];

// Export the tile data as tileData8
export { tileData8 };

const TileGrid8: React.FC = () => {
  return (
    <div>
      {/* Main tile grid for subpages */}
      <div className="tile-grid">
        {tileData8.map((tile, index) => (
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
        <Route path="Page8Sub1" element={<Page8Sub1 />} />
        <Route path="Page8Sub2" element={<Page8Sub2 />} />
        <Route path="Page8Sub3" element={<Page8Sub3 />} />
        <Route path="Page8Sub4" element={<Page8Sub4 />} />
        <Route path="Page8Sub5" element={<Page8Sub5 />} />
        <Route path="Page8Sub6" element={<Page8Sub6 />} />
        <Route path="Page8Sub7" element={<Page8Sub7 />} />
        <Route path="Page8Sub8" element={<Page8Sub8 />} />
        <Route path="Page8Sub9" element={<Page8Sub9 />} />
        <Route path="Page8Sub10" element={<Page8Sub10 />} />
        <Route path="Page8Sub11" element={<Page8Sub11 />} />
        <Route path="Page8Sub12" element={<Page8Sub12 />} />
      </Routes>
    </div>
  );
};

export default TileGrid8;

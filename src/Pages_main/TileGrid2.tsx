import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page2Sub1 from "../Pages_main/Pages_sub2/Page2sub1";
import Page2Sub2 from "../Pages_main/Pages_sub2/Page2sub2";
import Page2Sub3 from "../Pages_main/Pages_sub2/Page2sub3";
import Page2Sub5 from "./Pages_sub2/Page2sub5";
import Page2Sub4 from "./Pages_sub2/Page2sub4";
import Page2Sub6 from "./Pages_sub2/Page2sub6";
import Page2Sub7 from "./Pages_sub2/Page2sub7";
import Page2Sub8 from "./Pages_sub2/Page2sub8";
import Page2Sub9 from "./Pages_sub2/Page2sub9";
import Page2Sub10 from "./Pages_sub2/Page2sub10";
import Page2Sub11 from "./Pages_sub2/Page2sub11";
import Page2Sub12 from "./Pages_sub2/Page2sub12";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "src/Pages_main/NWP img/ridiviharaya1.jpeg",
    description: "Ridi Viharaya",
    page: "Page2Sub1", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/ethugala.jpg",
    description: "Ethugala",
    page: "Page2Sub2", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/munneswaram.jpeg",
    description: "Munneswaram",
    page: "Page2Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/yapahuwa.jpg",
    description: "Yapahuwa",
    page: "Page2Sub4", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/ranthaliya.jpeg",
    description: "Ranthaliya Lake",
    page: "Page2Sub5", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/badagamuwa1.jpg",
    description: "Badagamuwa Forrest",
    page: "Page2Sub6", // Note: Removed the leading '/'
  },

  {
    image: "src/Pages_main/NWP img/wilpaththu.jpg",
    description: "Wilpaththu National Park",
    page: "Page2Sub7", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/Annes.jpg",
    description: "St. Anne's National Shrine",
    page: "Page2Sub8", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/umandawa.jpeg",
    description: "Umandawa",
    page: "Page2Sub9", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/thalawila.jpg",
    description: "Thalawila Beach",
    page: "Page2Sub10", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/bathalagoda.jpg",
    description: "Bathalagoda Tank",
    page: "Page2Sub11", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/NWP img/sambudda.jpg",
    description: "Siri Gautama Sambuddharaja Maligawa",
    page: "Page2Sub12", // Note: Removed the leading '/'
  },
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
        <Route path="Page2Sub4" element={<Page2Sub4 />} />
        <Route path="Page2Sub5" element={<Page2Sub5 />} />
        <Route path="Page2Sub6" element={<Page2Sub6 />} />
        <Route path="Page2Sub7" element={<Page2Sub7 />} />
        <Route path="Page2Sub8" element={<Page2Sub8 />} />
        <Route path="Page2Sub9" element={<Page2Sub9 />} />
        <Route path="Page2Sub10" element={<Page2Sub10 />} />
        <Route path="Page2Sub11" element={<Page2Sub11 />} />
        <Route path="Page2Sub12" element={<Page2Sub12 />} />
      </Routes>
    </div>
  );
};

export default TileGrid2;

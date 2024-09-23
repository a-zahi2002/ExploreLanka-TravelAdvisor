import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";

import Page1Sub1 from "../Pages_main/Pages_sub1/Page1Sub1";
import Page1Sub2 from "../Pages_main/Pages_sub1/Page1Sub2";
import Page1Sub3 from "../Pages_main/Pages_sub1/Page1Sub3";
import Page1Sub4 from "../Pages_main/Pages_sub1/Page1Sub4";
import Page1Sub5 from "../Pages_main/Pages_sub1/Page1Sub5";
import Page1Sub6 from "../Pages_main/Pages_sub1/Page1Sub6";
import Page1Sub7 from "../Pages_main/Pages_sub1/Page1Sub7";
import Page1Sub8 from "../Pages_main/Pages_sub1/Page1Sub8";
import Page1Sub9 from "../Pages_main/Pages_sub1/Page1Sub9";
import Page1Sub10 from "../Pages_main/Pages_sub1/Page1Sub10";
import Page1Sub11 from "../Pages_main/Pages_sub1/Page1Sub11";
import Page1Sub12 from "../Pages_main/Pages_sub1/Page1Sub12";


interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "https://picsum.photos/200/300",
    description: "Pinnawala Elephant Orphanage",
    page: "Page1Sub1", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Adam’s Peak/Sri Padaya",
    page: "Page1Sub2", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Great World’s End Drop",
    page: "Page1Sub3", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Bopath Ella Falls",
    page: "Page1Sub4", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Kithulgala Belilena Cave",
    page: "Page1Sub5", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Kirindi Ella Waterfall",
    page: "Page1Sub6", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Millennium Elephant Foundation",
    page: "Page1Sub7", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Bibile Rock",
    page: "Page1Sub8", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Kithulgala Water Rafting",
    page: "Page1Sub9", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Samanalawewa Resorvior",
    page: "Page1Sub10", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Balangoda View Point",
    page: "Page1Sub11", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Alagalla Mountain Range",
    page: "Page1Sub12", // Note: Removed the leading '/'
  },
  // Add more tile data as needed
];

const TileGrid1: React.FC = () => {
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
        <Route path="Page1Sub1" element={<Page1Sub1 />} />
        <Route path="Page1Sub2" element={<Page1Sub2 />} />
        <Route path="Page1Sub3" element={<Page1Sub3 />} />
        <Route path="Page1Sub4" element={<Page1Sub4 />} />
        <Route path="Page1Sub5" element={<Page1Sub5 />} />
        <Route path="Page1Sub6" element={<Page1Sub6 />} />
        <Route path="Page1Sub7" element={<Page1Sub7 />} />
        <Route path="Page1Sub8" element={<Page1Sub8 />} />
        <Route path="Page1Sub9" element={<Page1Sub9 />} />
        <Route path="Page1Sub10" element={<Page1Sub10 />} />
        <Route path="Page1Sub11" element={<Page1Sub11 />} />
        <Route path="Page1Sub12" element={<Page1Sub12 />} />
    

      </Routes>
    </div>
  );
};

export default TileGrid1;

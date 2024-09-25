import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";

import Page1Sub1 from "../Pages_main/Pages_sub1/Page1sub1";
import Page1Sub2 from "../Pages_main/Pages_sub1/Page1sub2";
import Page1Sub3 from "../Pages_main/Pages_sub1/Page1sub3";
import Page1Sub4 from "../Pages_main/Pages_sub1/Page1sub4";
import Page1Sub5 from "../Pages_main/Pages_sub1/Page1sub5";
import Page1Sub6 from "../Pages_main/Pages_sub1/Page1Sub6";
import Page1Sub7 from "../Pages_main/Pages_sub1/Page1sub7";
import Page1Sub8 from "../Pages_main/Pages_sub1/Page1sub8";
import Page1Sub9 from "../Pages_main/Pages_sub1/Page1sub9";
import Page1Sub10 from "../Pages_main/Pages_sub1/Page1sub10";
import Page1Sub11 from "../Pages_main/Pages_sub1/Page1sub11";
import Page1Sub12 from "../Pages_main/Pages_sub1/Page1sub12";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "src/Pages_main/sabaragamuwa img/img1.jpg",
    description: "Pinnawala Elephant Orphanage",
    page: "Page1Sub1", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/sabaragamuwa img/img2.jpg",
    description: "Adam’s Peak/Sri Padaya",
    page: "Page1Sub2", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/sabaragamuwa img/img3.jpg",
    description: "Great World’s End Drop",
    page: "Page1Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/sabaragamuwa img/img4.jpg",
    description: "Bopath Ella Falls",
    page: "Page1Sub4", // Note: Removed the leading '/'
  },
  {
    image:"src/Pages_main/sabaragamuwa img/img5.webp",
    description: "Kithulgala Belilena Cave",
    page: "Page1Sub5", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/sabaragamuwa img/img6.jpg",
    description: "Kirindi Ella Waterfall",
    page: "Page1Sub6", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/sabaragamuwa img/img7.jpg",
    description: "Millennium Elephant Foundation",
    page: "Page1Sub7", // Note: Removed the leading '/'
  },
  {
    image:"src/Pages_main/sabaragamuwa img/img8.webp",
    description: "Bibile Rock",
    page: "Page1Sub8", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/sabaragamuwa img/img9.jpg",
    description: "Kithulgala Water Rafting",
    page: "Page1Sub9", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/sabaragamuwa img/img10.jpg",
    description: "Samanalawewa Resorvior",
    page: "Page1Sub10", // Note: Removed the leading '/'
  },
  {
    image:"src/Pages_main/sabaragamuwa img/img11.jpg",
    description: "Balangoda View Point",
    page: "Page1Sub11", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/sabaragamuwa img/img12.jpg",
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

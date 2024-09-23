import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page9Sub1 from "./Pages_sub9/Page9Sub1";
import Page9Sub2 from "./Pages_sub9/Page9Sub2";
import Page9Sub3 from "./Pages_sub9/Page9Sub3";
import Page9Sub4 from "./Pages_sub9/Page9Sub4";
import Page9Sub5 from "./Pages_sub9/Page9Sub5";
import Page9Sub6 from "./Pages_sub9/Page9Sub6";
import Page9Sub7 from "./Pages_sub9/Page9Sub7";
import Page9Sub8 from "./Pages_sub9/Page9Sub8";
import Page9Sub9 from "./Pages_sub9/Page9Sub9";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "src/assets/gangaramaya.jpg",
    description: "Gangaramaya Temple",
    page: "Page9Sub1", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/galle-face-green-2.jpg",
    description: "Galle Face Green",
    page: "Page9Sub2", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/viharamaha devi park.jpg",
    description: "Vihara maha devi Park",
    page: "Page9Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/colombo_national_museum.jpg",
    description: "Colombo National Museum",
    page: "Page9Sub4", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/Independence_Commemoration_Hall.jpg",
    description: "Independence Memorial Hall",
    page: "Page9Sub5", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/Beira_Lake.jpg",
    description: "Beira Lake",
    page: "Page9Sub6", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/Jami-Ul-Alfar-Mosque.jpg",
    description: "Jami Ul-Alfar Mosque",
    page: "Page9Sub7", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/wolvendal church.jpg",
    description: "Wolvendaal Church",
    page: "Page9Sub8", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/kelani temple.jpg",
    description: "Kelaniya Raja Maha Vihara",
    page: "Page9Sub9", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/Sri-Kailawasanathan1.jpg",
    description: "Temple of Sri Kailawasanathan Swami Devasthanam Kovil",
    page: "Page9Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/the-old-colombo-dutch.jpg",
    description: "Dutch Hospital Shopping Precinct",
    page: "Page9Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/brief garden.webp",
    description: "Brief Garden",
    page: "Page9Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/ella falls.webp",
    description: "Ella Falls",
    page: "Page9Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/Arcade-at-Independence-Square.png",
    description: "Arcade Independence Square",
    page: "Page9Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/assets/Bandiyamulla Tombstone.jpeg",
    description: "Bandiyamulla Tombstone",
    page: "Page9Sub3", // Note: Removed the leading '/'
  },
  // Add more tile data as needed
];

const TileGrid9: React.FC = () => {
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
        <Route path="Page9Sub1" element={<Page9Sub1 />} />
        <Route path="Page9Sub2" element={<Page9Sub2 />} />
        <Route path="Page9Sub3" element={<Page9Sub3 />} />
        <Route path="Page9Sub4" element={<Page9Sub4 />} />
        <Route path="Page9Sub5" element={<Page9Sub5 />} />
        <Route path="Page9Sub6" element={<Page9Sub6 />} />
        <Route path="Page9Sub7" element={<Page9Sub7 />} />
        <Route path="Page9Sub8" element={<Page9Sub8 />} />
        <Route path="Page9Sub9" element={<Page9Sub9 />} />





      </Routes>
    </div>
  );
};

export default TileGrid9;

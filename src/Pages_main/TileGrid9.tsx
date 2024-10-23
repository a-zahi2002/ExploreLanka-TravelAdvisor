import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css"; // Ensure you have the correct CSS file name
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
import Page9Sub10 from "./Pages_sub9/Page9Sub10";
import Page9Sub11 from "./Pages_sub9/Page9Sub11";
import Page9Sub12 from "./Pages_sub9/Page9Sub12";
import Page9Sub13 from "./Pages_sub9/Page9Sub13";
import Page9Sub14 from "./Pages_sub9/Page9Sub14";
import Page9Sub15 from "./Pages_sub9/Page9Sub15";

interface TileData {
  image: string;
  description: string;
  page: string;
}

// Renamed the tile data to tileData9 for consistency
const tileData9: TileData[] = [
  {
    image: "src/assets/western_img/gangaramaya.jpg",
    description: "Gangaramaya Temple",
    page: "Page9Sub1",
  },
  {
    image: "src/assets/western_img/galle-face-green-2.jpg",
    description: "Galle Face Green",
    page: "Page9Sub2",
  },
  {
    image: "src/assets/western_img/viharamaha devi park.jpg",
    description: "Vihara Maha Devi Park",
    page: "Page9Sub3",
  },
  {
    image: "src/assets/western_img/colombo_national_museum.jpg",
    description: "Colombo National Museum",
    page: "Page9Sub4",
  },
  {
    image: "src/assets/western_img/Independence_Commemoration_Hall.jpg",
    description: "Independence Memorial Hall",
    page: "Page9Sub5",
  },
  {
    image: "src/assets/western_img/Beira_Lake.jpg",
    description: "Beira Lake",
    page: "Page9Sub6",
  },
  {
    image: "src/assets/western_img/Jami-Ul-Alfar-Mosque.jpg",
    description: "Jami Ul-Alfar Mosque",
    page: "Page9Sub7",
  },
  {
    image: "src/assets/western_img/wolvendal church.jpg",
    description: "Wolvendaal Church",
    page: "Page9Sub8",
  },
  {
    image: "src/assets/western_img/kelani temple.jpg",
    description: "Kelaniya Raja Maha Vihara",
    page: "Page9Sub9",
  },
  {
    image: "src/assets/western_img/Sri-Kailawasanathan1.jpg",
    description: "Sri Kailawasanathan Swami Devasthanam Kovil",
    page: "Page9Sub10",
  },
  {
    image: "src/assets/western_img/the-old-colombo-dutch.jpg",
    description: "Dutch Hospital Shopping Precinct",
    page: "Page9Sub11",
  },
  {
    image: "src/assets/western_img/brief garden.webp",
    description: "Brief Garden",
    page: "Page9Sub12",
  },
  {
    image: "src/assets/western_img/ella falls.webp",
    description: "Alagiyawanna Ella Falls",
    page: "Page9Sub13",
  },
  {
    image: "src/assets/western_img/Arcade-at-Independence-Square.png",
    description: "Arcade Independence Square",
    page: "Page9Sub14",
  },
  {
    image: "src/assets/western_img/Bandiyamulla Tombstone.jpeg",
    description: "Bandiyamulla Tombstone",
    page: "Page9Sub15",
  },
  // Add more tile data as needed
];

// Export the tile data as tileData9
export { tileData9 };

const TileGrid9: React.FC = () => {
  return (
    <div>
      {/* Main tile grid for subpages */}
      <div className="tile-grid">
        {tileData9.map((tile, index) => (
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
        <Route path="Page9Sub10" element={<Page9Sub10 />} />
        <Route path="Page9Sub11" element={<Page9Sub11 />} />
        <Route path="Page9Sub12" element={<Page9Sub12 />} />
        <Route path="Page9Sub13" element={<Page9Sub13 />} />
        <Route path="Page9Sub14" element={<Page9Sub14 />} />
        <Route path="Page9Sub15" element={<Page9Sub15 />} />
      </Routes>
    </div>
  );
};

export default TileGrid9;

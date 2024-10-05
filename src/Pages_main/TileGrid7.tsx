import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page7Sub1 from "./Pages_sub7/Page7Sub1";
import Page7Sub2 from "./Pages_sub7/Page7Sub2";
import Page7Sub3 from "./Pages_sub7/Page7Sub2";
import Page7Sub4 from "./Pages_sub7/Page7Sub4";
import Page7Sub5 from "./Pages_sub7/Page7Sub5";
import Page7Sub6 from "./Pages_sub7/Page7Sub6";
import Page7Sub7 from "./Pages_sub7/Page7Sub7";
import Page7Sub8 from "./Pages_sub7/Page7Sub8";
import Page7Sub9 from "./Pages_sub7/Page7sub9";
import Page7Sub10 from "./Pages_sub7/Page7Sub10";
import Page7Sub11 from "./Pages_sub7/Page7sub11";
import Page7Sub12 from "./Pages_sub7/Page7Sub12";
import Page7Sub13 from "./Pages_sub7/Page7sub13";
import Page7Sub14 from "./Pages_sub7/Page7Sub14";
import Page7Sub15 from "./Pages_sub7/Page7Sub15";
import Page7Sub16 from "./Pages_sub7/Page7Sub16";
import Page7Sub17 from "./Pages_sub7/Page7Sub17";
import Page7Sub18 from "./Pages_sub7/Page7Sub18";
import Page7Sub19 from "./Pages_sub7/Page7Sub19";
import Page7Sub20 from "./Pages_sub7/Page7Sub20";
import Page7Sub21 from "./Pages_sub7/Page7Sub21";
import Page7Sub22 from "./Pages_sub7/Page7Sub22";
import Page7Sub23 from "./Pages_sub7/Page7Sub23";
import Page7Sub24 from "./Pages_sub7/Page7Sub24";
import Page7Sub25 from "./Pages_sub7/Page7Sub25";


interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "src/Pages_main/Northern img/nallur.jpg",
    description: "Nallur Kandaswamy temple",
    page: "Page7Sub1", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Jaffna public library.jpeg",
    description: "Jaffna Public library",
    page: "Page7Sub2", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Jaffna-Fort.jpg",
    description: "Jaffna Fort",
    page: "Page7Sub3", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Nilavaraikinaru.jpg",
    description: "Nilavaraikinaru",
    page: "Page7Sub4", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Kankesanthurai.jpg",
    description: "Kankesanthurai",
    page: "Page7Sub5", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Sakkotai cape.jpg",
    description: "Sakkotai cape",
    page: "Page7Sub6", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Nainativu.jpg",
    description: "Nainativu(Island)",
    page: "Page7Sub7", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Neduntivu.jpg",
    description: "Neduntivu(Island)",
    page: "Page7Sub8", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page7Sub9", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "Page7Sub10", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "Page7Sub11", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page7Sub12", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "Page7Sub13", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "Page7Sub14", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page7Sub15", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "Page7Sub16", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "Page7Sub17", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page7Sub18", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "Page7Sub19", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "Page7Sub20", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page7Sub21", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 1",
    page: "Page7Sub22", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 2",
    page: "Page7Sub23", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page7Sub24", // Note: Removed the leading '/'
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Tile 3",
    page: "Page7Sub25", // Note: Removed the leading '/'
  },
  // Add more tile data as needed
];

const TileGrid7: React.FC = () => {
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
        <Route path="Page7Sub1" element={<Page7Sub1 />} />
        <Route path="Page7Sub2" element={<Page7Sub2 />} />
        <Route path="Page7Sub3" element={<Page7Sub3 />} />
        <Route path="Page7Sub4" element={<Page7Sub4 />} />
        <Route path="Page7Sub5" element={<Page7Sub5 />} />
        <Route path="Page7Sub6" element={<Page7Sub6 />} />
        <Route path="Page7Sub7" element={<Page7Sub7 />} />
        <Route path="Page7Sub8" element={<Page7Sub8 />} />
        <Route path="Page7Sub9" element={<Page7Sub9 />} />
        <Route path="Page7Sub10" element={<Page7Sub10 />} />
        <Route path="Page7Sub11" element={<Page7Sub11 />} />
        <Route path="Page7Sub12" element={<Page7Sub12 />} />
        <Route path="Page7Sub13" element={<Page7Sub13 />} />
        <Route path="Page7Sub14" element={<Page7Sub14 />} />
        <Route path="Page7Sub15" element={<Page7Sub15 />} />
        <Route path="Page7Sub16" element={<Page7Sub16 />} />
        <Route path="Page7Sub17" element={<Page7Sub17 />} />
        <Route path="Page7Sub18" element={<Page7Sub18 />} />
        <Route path="Page7Sub19" element={<Page7Sub19 />} />
        <Route path="Page7Sub20" element={<Page7Sub20 />} />
        <Route path="Page7Sub21" element={<Page7Sub21 />} />
        <Route path="Page7Sub22" element={<Page7Sub22 />} />
        <Route path="Page7Sub23" element={<Page7Sub23 />} />
        <Route path="Page7Sub24" element={<Page7Sub24 />} />
        <Route path="Page7Sub25" element={<Page7Sub25 />} />
      </Routes>
    </div>
  );
};

export default TileGrid7;

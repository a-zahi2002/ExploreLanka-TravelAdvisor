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
    image: "src/Pages_main/Northern img/Thiruketheeswaram temple-09.jpg",
    description: "Thiruketheeswaram temple",
    page: "Page7Sub9", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Mannar madu matha church-10.jpg",
    description: "Mannar madu matha church",
    page: "Page7Sub10", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Mannar light house-11.jpg",
    description: "Mannar light house",
    page: "Page7Sub11", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Mannar kunchikulam bridge-12.jpg",
    description: "Mannar kunchikulam bridge",
    page: "Page7Sub12", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Adam's bridge's edge(Ram setu)-13.jpg",
    description: "Adam's bridge's edge(Ram setu)",
    page: "Page7Sub13", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Elephant pass saltern-14.jpg",
    description: "Elephant pass saltern",
    page: "Page7Sub14", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Iranaimadu tank-15.jpg",
    description: "Iranaimadu tank",
    page: "Page7Sub15", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Muripukulam-16.jpg",
    description: "Muripukulam",
    page: "Page7Sub16", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Kilinochchi war memorial-17.jpg",
    description: "Kilinochchi war memorial",
    page: "Page7Sub17", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Chundikulam beach-18.jpg",
    description: "Chundikulam beach",
    page: "Page7Sub18", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Submarine yard-19.jpg",
    description: "Submarine yard",
    page: "Page7Sub19", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Puthukudiyirupu war museum-20.jpg",
    description: "Puthukudiyirupu war museum",
    page: "Page7Sub20", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Naayaru lagoon-21.jpg",
    description: "Naayaru lagoon",
    page: "Page7Sub21", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Archaeological museum-22.jpg",
    description: "Archaeological museum",
    page: "Page7Sub22", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Vavuniya kulam-23.jpg",
    description: "Vavuniya kulam",
    page: "Page7Sub23", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Kalvari church-24.jpg",
    description: "Kalvari church",
    page: "Page7Sub24", // Note: Removed the leading '/'
  },
  {
    image: "src/Pages_main/Northern img/Pavatkulam-25.jpg",
    description: "Pavatkulam",
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

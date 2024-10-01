import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page6Sub1 from "./Pages_sub6/Page6Sub1";
import Page6Sub2 from "./Pages_sub6/Page6Sub2";
import Page6Sub3 from "./Pages_sub6/Page6Sub3";
import Page6Sub4 from "./Pages_sub6/Page6Sub4";
import Page6Sub5 from "./Pages_sub6/Page6Sub5";
import Page6Sub6 from "./Pages_sub6/Page6Sub6";
import Page6Sub7 from "./Pages_sub6/Page6Sub7";
import Page6Sub8 from "./Pages_sub6/Page6Sub8";
import Page6Sub9 from "./Pages_sub6/Page6Sub9";
import Page6Sub10 from "./Pages_sub6/Page6Sub10";
import Page6Sub11 from "./Pages_sub6/Page6Sub11";
import Page6Sub12 from "./Pages_sub6/Page6Sub12";
import Page6Sub13 from "./Pages_sub6/Page6Sub13";
import Page6Sub14 from "./Pages_sub6/Page6Sub14";
import Page6Sub15 from "./Pages_sub6/Page6Sub15";
import Page6Sub16 from "./Pages_sub6/Page6Sub16";
import Page6Sub17 from "./Pages_sub6/Page6Sub17";
import Page6Sub18 from "./Pages_sub6/Page6Sub18";
import Page6Sub19 from "./Pages_sub6/Page6Sub19";
import Page6Sub20 from "./Pages_sub6/Page6Sub20";
import Page6Sub21 from "./Pages_sub6/Page6Sub21";
import Page6Sub22 from "./Pages_sub6/Page6Sub22";
import Page6Sub23 from "./Pages_sub6/Page6Sub23";
import Page6Sub24 from "./Pages_sub6/Page6Sub24";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "https://picsum.photos/200/300",
    description: "Arugam Bay",
    page: "Page6Sub1",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Elephant Rock",
    page: "Page6Sub2",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Nuwaragala Mountain Camping",
    page: "Page6Sub3",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Kumana National Park",
    page: "Page6Sub4",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Masjid Al-Aqsa",
    page: "Page6Sub5",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Batticaloa Lighthouse",
    page: "Page6Sub6",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Eravur Lagoon Park",
    page: "Page6Sub7",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Museum of Kattankudy",
    page: "Page6Sub8",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Kallady Beach and Kallady Bridge",
    page: "Page6Sub9",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Pasikudah Beach",
    page: "Page6Sub10",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Nilaveli Beach",
    page: "Page6Sub11",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Koneswaram Temple",
    page: "Page6Sub12",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Fort Frederick",
    page: "Page6Sub13",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Marble Beach",
    page: "Page6Sub14",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Kanniya Hot Springs",
    page: "Page6Sub15",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Batticaloa Fort",
    page: "Page6Sub16",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Batticaloa Lagoon",
    page: "Page6Sub17",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Katt ankudy Mosque",
    page: "Page6Sub18",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Trincomalee Harbour",
    page: "Page6Sub19",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Trincomalee Beach",
    page: "Page6Sub20",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Nilaveli Lagoon",
    page: "Page6Sub21",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Pigeon Island National Park",
    page: "Page6Sub22",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Trincomalee War Cemetery",
    page: "Page6Sub23",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Trincomalee Museum",
    page: "Page6Sub24",
  },
];

const TileGrid6: React.FC = () => {
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
        <Route path="Page6Sub1" element={<Page6Sub1 />} />
        <Route path="Page6Sub2" element={<Page6Sub2 />} />
        <Route path="Page6Sub3" element={<Page6Sub3 />} />
        <Route path="Page6Sub4" element={<Page6Sub4 />} />
        <Route path="Page6Sub5" element={<Page6Sub5 />} />
        <Route path="Page6Sub6" element={<Page6Sub6 />} />
        <Route path="Page6Sub7" element={<Page6Sub7 />} />
        <Route path="Page6Sub8" element={<Page6Sub8 />} />
        <Route path="Page6Sub9" element={<Page6Sub9 />} />
        <Route path="Page6Sub10" element={<Page6Sub10 />} />
        <Route path="Page6Sub11" element={<Page6Sub11 />} />
        <Route path="Page6Sub12" element={<Page6Sub12 />} />
        <Route path="Page6Sub13" element={<Page6Sub13 />} />
        <Route path="Page6Sub14" element={<Page6Sub14 />} />
        <Route path="Page6Sub15" element={<Page6Sub15 />} />
        <Route path="Page6Sub16" element={<Page6Sub16 />} />
        <Route path="Page6Sub17" element={<Page6Sub17 />} />
        <Route path="Page6Sub18" element={<Page6Sub18 />} />
        <Route path="Page6Sub19" element={<Page6Sub19 />} />
        <Route path="Page6Sub20" element={<Page6Sub20 />} />
        <Route path="Page6Sub21" element={<Page6Sub21 />} />
        <Route path="Page6Sub22" element={<Page6Sub22 />} />
        <Route path="Page6Sub23" element={<Page6Sub23 />} />
        <Route path="Page6Sub24" element={<Page6Sub24 />} />
      </Routes>
    </div>
  );
};

export default TileGrid6;

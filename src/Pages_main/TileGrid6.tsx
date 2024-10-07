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

const tileData6: TileData[] = [
  {
    image: "src/EP_Images/arugambay.jpg",
    description: "Arugam Bay",
    page: "Page6Sub1",
  },
  {
    image: "src/EP_Images/elephant rock.jpg",
    description: "Elephant Rock",
    page: "Page6Sub2",
  },
  {
    image: "src/EP_Images/nuwaragale.jpg",
    description: "Nuwaragala Mountain Camping",
    page: "Page6Sub3",
  },
  {
    image: "src/EP_Images/kumana.jpg",
    description: "Kumana National Park",
    page: "Page6Sub4",
  },
  {
    image: "src/EP_Images/al aqsa.jpg",
    description: "Masjid Al-Aqsa",
    page: "Page6Sub5",
  },
  {
    image: "src/EP_Images/batticaloa light house.jpg",
    description: "Batticaloa Lighthouse",
    page: "Page6Sub6",
  },
  {
    image: "src/EP_Images/lagoon park.jpg",
    description: "Eravur Lagoon Park",
    page: "Page6Sub7",
  },
  {
    image: "src/EP_Images/kky meusium.jpg",
    description: "Museum of Kattankudy",
    page: "Page6Sub8",
  },
  {
    image: "src/EP_Images/kalladi beach.jpg",
    description: "Kallady Beach and Kallady Bridge",
    page: "Page6Sub9",
  },
  {
    image: "src/EP_Images/pasikuda.jpg",
    description: "Pasikudah Beach",
    page: "Page6Sub10",
  },
  {
    image: "src/EP_Images/nilaveli.jpg",
    description: "Nilaveli Beach",
    page: "Page6Sub11",
  },
  {
    image: "src/EP_Images/koneswaram.jpg",
    description: "Koneswaram Temple",
    page: "Page6Sub12",
  },
  {
    image: "src/EP_Images/fort fredrick.jpg",
    description: "Fort Frederick",
    page: "Page6Sub13",
  },
  {
    image: "src/EP_Images/marble beach.jpg",
    description: "Marble Beach",
    page: "Page6Sub14",
  },
  {
    image: "src/EP_Images/hotspring kanniya.jpg",
    description: "Kanniya Hot Springs",
    page: "Page6Sub15",
  },
  {
    image: "src/EP_Images/fort batticaloa.jpg",
    description: "Batticaloa Fort",
    page: "Page6Sub16",
  },
  {
    image: "src/EP_Images/batticaloa lagoon.jpg",
    description: "Batticaloa Lagoon",
    page: "Page6Sub17",
  },
  {
    image: "src/EP_Images/kky mosque attack.jpg",
    description: "Kattankudy Mosque",
    page: "Page6Sub18",
  },
  {
    image: "src/EP_Images/trinco harbour.jpg",
    description: "Trincomalee Harbour",
    page: "Page6Sub19",
  },
  {
    image: "src/EP_Images/trinco harbour.jpg",
    description: "Trincomalee Beach",
    page: "Page6Sub20",
  },
  {
    image: "src/EP_Images/nilaveli lagoon.jpg",
    description: "Nilaveli Lagoon",
    page: "Page6Sub21",
  },
  {
    image: "src/EP_Images/pigeon island.jpg",
    description: "Pigeon Island National Park",
    page: "Page6Sub22",
  },
  {
    image: "src/EP_Images/trinco war cemetry.jpg",
    description: "Trincomalee War Cemetery",
    page: "Page6Sub23",
  },
  {
    image: "src/EP_Images/trinco musium.jpg",
    description: "Trincomalee Museum",
    page: "Page6Sub24",
  },
];

// Export the tile data as tileData6
export { tileData6 };

const TileGrid6: React.FC = () => {
  return (
    <div>
      {/* Main tile grid for subpages */}
      <div className="tile-grid">
        {tileData6.map((tile, index) => (
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

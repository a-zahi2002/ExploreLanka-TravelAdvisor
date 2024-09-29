import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page5Sub1 from "./Pages_sub5/Page5Sub1";
import Page5Sub2 from "./Pages_sub5/Page5Sub2";
import Page5Sub3 from "./Pages_sub5/Page5Sub3";
import Page5Sub4 from "./Pages_sub5/Page5Sub4";
import Page5Sub5 from "./Pages_sub5/Page5Sub5";
import Page5Sub6 from "./Pages_sub5/Page5Sub6";
import Page5Sub7 from "./Pages_sub5/Page5Sub7";
import Page5Sub8 from "./Pages_sub5/Page5Sub8";
import Page5Sub9 from "./Pages_sub5/Page5Sub9";
import Page5Sub10 from "./Pages_sub5/Page5Sub10";
import Page5Sub11 from "./Pages_sub5/Page5Sub11";
import Page5Sub12 from "./Pages_sub5/Page5SUb12";
import Page5Sub13 from "./Pages_sub5/Page5Sub13";
import Page5Sub14 from "./Pages_sub5/Page5Sub14";
import Page5Sub15 from "./Pages_sub5/Page5Sub15";
import Page5Sub16 from "./Pages_sub5/Page5Sub16";
import Page5Sub17 from "./Pages_sub5/Page5Sub17";
import Page5Sub18 from "./Pages_sub5/Page5Sub18";
import Page5Sub19 from "./Pages_sub5/Page5Sub19";
import Page5Sub20 from "./Pages_sub5/Page5Sub20";
import Page5Sub21 from "./Pages_sub5/Page5Sub21";
import Page5Sub22 from "./Pages_sub5/Page5SUb22";
import Page5Sub23 from "./Pages_sub5/Page5Sub23";
import Page5Sub24 from "./Pages_sub5/Page5Sub24";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData: TileData[] = [
  {
    image: "https://picsum.photos/200/300",
    description: "Ruwanwelisaya Stupa",
    page: "Page5Sub1",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Jaya Sri Maha Bodhi",
    page: "Page5Sub2",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Isurumuniya Temple",
    page: "Page5Sub3",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Avukana Buddha Statue",
    page: "Page5Sub4",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Lovamahapaya (Brazen Palace)",
    page: "Page5Sub5",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Royal Palace of King Vijayabahu I",
    page: "Page5Sub6",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Twin Ponds (Kuttam Pokuna)",
    page: "Page5Sub7",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Anuradhapura Archaeological Museum",
    page: "Page5Sub8",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Ranmasu Uyana",
    page: "Page5Sub9",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Kaludiya Pokuna",
    page: "Page5Sub10",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Padaviya Tank",
    page: "Page5Sub11",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Kala Wewa Reservoir",
    page: "Page5Sub12",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Polonnaruwa Vatadage",
    page: "Page5Sub13",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Lankathilaka Image House",
    page: "Page5Sub14",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Royal Palace of King Parakramabahu",
    page: "Page5Sub15",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Alahana Pirivena",
    page: "Page5Sub16",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Rankoth Vehera",
    page: "Page5Sub17",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Gal Vihara",
    page: "Page5Sub18",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Thuparama Dagaba",
    page: "Page5Sub19",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Hatadage",
    page: "Page5Sub20",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Nissanka Latha Mandapaya",
    page: "Page5Sub21",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Satmahal Prasada",
    page: "Page5Sub22",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Polonnaruwa Museum",
    page: "Page5Sub23",
  },
  {
    image: "https://picsum.photos/200/300",
    description: "Menik Vihara",
    page: "Page5Sub24",
  },
];

const TileGrid5: React.FC = () => {
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
        <Route path="Page5Sub1" element={<Page5Sub1 />} />
        <Route path="Page5Sub2" element={<Page5Sub2 />} />
        <Route path="Page5Sub3" element={<Page5Sub3 />} />
        <Route path="Page5Sub4" element={<Page5Sub4 />} />
        <Route path="Page5Sub5" element={<Page5Sub5 />} />
        <Route path="Page5Sub6" element={<Page5Sub6 />} />
        <Route path="Page5Sub7" element={<Page5Sub7 />} />
        <Route path="Page5Sub8" element={<Page5Sub8 />} />
        <Route path="Page5Sub9" element={<Page5Sub9 />} />
        <Route path="Page5Sub10" element={<Page5Sub10 />} />
        <Route path="Page5Sub11" element={<Page5Sub11 />} />
        <Route path="Page5Sub12" element={<Page5Sub12 />} />
        <Route path="Page5Sub13" element={<Page5Sub13 />} />
        <Route path="Page5Sub14" element={<Page5Sub14 />} />
        <Route path="Page5Sub15" element={<Page5Sub15 />} />
        <Route path="Page5Sub16" element={<Page5Sub16 />} />
        <Route path="Page5Sub17" element={<Page5Sub17 />} />
        <Route path="Page5Sub18" element={<Page5Sub18 />} />
        <Route path="Page5Sub19" element={<Page5Sub19 />} />
        <Route path="Page5Sub20" element={<Page5Sub20 />} />
        <Route path="Page5Sub21" element={<Page5Sub21 />} />
        <Route path="Page5Sub22" element={<Page5Sub22 />} />
        <Route path="Page5Sub23" element={<Page5Sub23 />} />
        <Route path="Page5Sub24" element={<Page5Sub24 />} />
      </Routes>
    </div>
  );
};

export default TileGrid5;

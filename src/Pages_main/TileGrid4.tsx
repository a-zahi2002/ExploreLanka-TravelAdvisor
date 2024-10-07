import React from "react";
import { Routes, Route } from "react-router-dom";
import "./TileGrid1.css";
import Tile from "../Tile";
import Page4Sub1 from "./Pages_sub4/Page4Sub1";
import Page4Sub2 from "./Pages_sub4/Page4Sub2";
import Page4Sub3 from "./Pages_sub4/Page4Sub3";
import Page4Sub4 from "./Pages_sub4/Page4Sub4";
import Page4Sub5 from "./Pages_sub4/Page4Sub5";
import Page4Sub6 from "./Pages_sub4/Page4Sub6";
import Page4Sub7 from "./Pages_sub4/Page4Sub7";
import Page4Sub8 from "./Pages_sub4/Page4Sub8";
import Page4Sub9 from "./Pages_sub4/Page4Sub9";

interface TileData {
  image: string;
  description: string;
  page: string;
}

const tileData4: TileData[] = [
  {
    image: "src/uva img/img1.jpg",
    description: "Nine Arches Railway Bridge",
    page: "Page4Sub1",
  },
  {
    image: "src/uva img/img2.jpg",
    description: "Kirchhayn Bungalow",
    page: "Page4Sub2",
  },
  {
    image: "src/uva img/img3.jpg",
    description: "Bambarakanda Falls",
    page: "Page4Sub3",
  },
  {
    image: "src/uva img/img4.jpg",
    description: "Diyaluma Falls",
    page: "Page4Sub4",
  },
  {
    image: "src/uva img/img5.JPG",
    description: "Pilkington Point",
    page: "Page4Sub5",
  },
  {
    image: "src/uva img/img6.jpg",
    description: "Porawagala View Point",
    page: "Page4Sub6",
  },
  {
    image: "src/uva img/img7.jpg",
    description: "Ella Rock",
    page: "Page4Sub7",
  },
  {
    image: "src/uva img/img8.jpg",
    description: "Nil Diya Pokuna",
    page: "Page4Sub8",
  },
  {
    image: "src/uva img/img9.jpg",
    description: "Kataragama Dewalaya",
    page: "Page4Sub9",
  },
];

const TileGrid4: React.FC = () => {
  return (
    <div>
      <div className="tile-grid">
        {tileData4.map((tile, index) => (
          <Tile
            key={index}
            image={tile.image}
            description={tile.description}
            page={tile.page}
          />
        ))}
      </div>

      <Routes>
        <Route path="Page4Sub1" element={<Page4Sub1 />} />
        <Route path="Page4Sub2" element={<Page4Sub2 />} />
        <Route path="Page4Sub3" element={<Page4Sub3 />} />
        <Route path="Page4Sub4" element={<Page4Sub4 />} />
        <Route path="Page4Sub5" element={<Page4Sub5 />} />
        <Route path="Page4Sub6" element={<Page4Sub6 />} />
        <Route path="Page4Sub7" element={<Page4Sub7 />} />
        <Route path="Page4Sub8" element={<Page4Sub8 />} />
        <Route path="Page4Sub9" element={<Page4Sub9 />} />
      </Routes>
    </div>
  );
};

export { tileData4 };
export default TileGrid4;

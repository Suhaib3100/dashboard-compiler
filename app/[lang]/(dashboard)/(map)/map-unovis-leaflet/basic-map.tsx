"use client";
import { VisLeafletMap } from "@unovis/react";
import { MAP_KEY } from "../constant";

const BasicMap = () => {

  const style = `https://api.maptiler.com/maps/positron/style.json?key=${MAP_KEY}`;
  return (
    <div className=" w-full h-[350px] overflow-hidden relative">
      <VisLeafletMap
        style={style}
        className="h-full"
        attribution={[
          '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
          '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
        ]}
      />
    </div>
  );
};

export default BasicMap;

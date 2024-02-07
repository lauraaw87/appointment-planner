import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => {
        const {name, ...description} = item;
        return <Tile name={name} description={description} key={`n-${i}`} />;
      })}
    </div>
  );
};

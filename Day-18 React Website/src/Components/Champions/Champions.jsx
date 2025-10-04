import React, { useState } from "react";
import Card from "../Card/Card";
import players from "../../assets/Champions.json";

function Champions() {
  const [champions, setChampions] = useState(players);
  return (
    <div className="champions scroll-m-0 py-3 px-2 flex justify-start items-stretch overflow-x-scroll gap-4">
      {champions.map((champion, index) => (
        <Card key={index} player={champion} />
      ))}
    </div>
  );
}

export default Champions;

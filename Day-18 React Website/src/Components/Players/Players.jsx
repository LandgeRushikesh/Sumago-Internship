import React from "react";
import data from "../../assets/Players.json";
import Card from "../Card/Card";

function Players() {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-white text-center font-bold">
        The Pride of Indian Cricket
      </h1>
      <div className="py-5 players grid justify-items-center items-stretch grid-cols-3 gap-x-8 gap-y-10">
        {data.map((player, index) => (
          <Card key={index} player={player} />
        ))}
      </div>
    </div>
  );
}

export default Players;

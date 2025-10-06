import React from "react";
import Format from "./Format";

function Stats() {
  return (
    <div className="mx-10 my-8">
      <div className="batting">
        <h2 className="text-3xl text-white font-bold my-4">
          Batting Statistics
        </h2>
        <div className="format grid grid-cols-3 gap-4">
          <Format section="batting" format="test" />
          <Format section="batting" format="ODI" />
          <Format section="batting" format="T20" />
        </div>
      </div>
      <div className="bowling">
        <h2 className="text-3xl text-white font-bold my-4">
          Bowling Statistics
        </h2>
        <div className="format grid grid-cols-3 gap-4">
          <Format section="bowling" format="test" />
          <Format section="bowling" format="ODI" />
          <Format section="bowling" format="T20" />
        </div>
      </div>
    </div>
  );
}

export default Stats;

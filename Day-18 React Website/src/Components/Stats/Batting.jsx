import React from "react";
import { useLocation } from "react-router-dom";

function Batting() {
  const location = useLocation();

  const format = location.state?.format;
  return (
    <div>
      <h1>{format}</h1>
    </div>
  );
}

export default Batting;

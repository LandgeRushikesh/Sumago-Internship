import React from "react";
import { useNavigate } from "react-router-dom";

function Format({ section, format }) {
  const navigate = useNavigate();

  const HandleClick = () => {
    if (section === "batting") {
      navigate("/Batting", { state: { format } });
    } else {
      navigate("/Bowling", { state: { format } });
    }
  };
  return (
    <div
      className={`card bg-cover w-full min-h-[200px] ${
        section === "batting"
          ? format === "test"
            ? "bg-[url('/test-format-batsman.jpeg')]"
            : format === "ODI"
            ? "bg-[url('/odi-format-batsman.jpeg')]"
            : "bg-[url('/t20-batsman.webp')]"
          : format === "test"
          ? "bg-[url('/test-format-bowler.png')]"
          : format === "ODI"
          ? "bg-[url('/odi-format-bowler.avif')]"
          : "bg-[url('/t20-bowler.jpeg')]"
      } rounded-lg relative cursor-pointer `}
      onClick={HandleClick}
    >
      <div className="overlay w-full h-full absolute inset-0 bg-black opacity-50 rounded-lg z-10"></div>
      <h3 className="w-full h-full text-3xl text-white z-20 absolute inset-0 flex justify-center items-center">
        {format === "test"
          ? "Test Format"
          : format === "ODI"
          ? "ODI Format"
          : "T20 Format"}
      </h3>
    </div>
  );
}

export default Format;

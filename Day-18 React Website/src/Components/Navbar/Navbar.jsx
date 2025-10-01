import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full m-auto bg-white text-black flex justify-between items-center px-5 py-4 font-bold shadow-lg shadow-slate-600">
      <h1 className="text-2xl">
        <NavLink to="/">Legends of 22 Yards</NavLink>
      </h1>
      <ul className="w-1/3 flex justify-evenly items-center text-lg">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Players">Players</NavLink>
        </li>
        <li>
          <NavLink to="/Teams">Teams</NavLink>
        </li>
        <li>
          <NavLink to="/Stats">Stats</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

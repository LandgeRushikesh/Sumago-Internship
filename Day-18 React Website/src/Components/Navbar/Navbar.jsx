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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500 font-bold text-xl" : "text-black"
              } transition-all ease-in-out duration-150`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500 font-bold text-xl" : "text-black"
              } transition-all ease-in-out duration-150`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Players"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500 font-bold text-xl" : "text-black"
              } transition-all ease-in-out duration-150`
            }
          >
            Players
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Stats"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500 font-bold text-xl" : "text-black"
              } transition-all ease-in-out duration-150`
            }
          >
            Stats
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Gallery"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500 font-bold text-xl" : "text-black"
              } transition-all ease-in-out duration-150`
            }
          >
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

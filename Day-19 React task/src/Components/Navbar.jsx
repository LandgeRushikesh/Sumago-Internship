import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" />
        </li>
        <li>
          <NavLink to="/About" />
        </li>
        <li>
          <NavLink to="/Services" />
        </li>
        <li>
          <NavLink to="/" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

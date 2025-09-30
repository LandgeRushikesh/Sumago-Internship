import React from "react";
import { Link, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Dashboard;

import React from "react";

function Sidebar({ category, setCategory, format }) {
  const BattingstatsCategory = [
    "Most Runs",
    "Highest Scores",
    "Most Hundreds",
    "Most Fiftes",
    "Most Fours",
    "Most Sixes",
  ];

  return (
    <div className="text-white">
      <h1 className="text-2xl">{format.toUpperCase()} CRICKET</h1>
      <ul>
        {BattingstatsCategory.map((cat, index) => (
          <li
            className="cursor-pointer"
            key={index}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

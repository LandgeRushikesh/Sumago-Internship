import React from "react";

function StatsTable({ stats, keys, category }) {
  return (
    <table className="w-full text-white">
      <caption className="text-2xl">{category.toUpperCase()}</caption>
      <thead>
        <tr>
          {stats.length > 0 &&
            Object.keys(stats[0]).map((title, index) => (
              <th
                key={index}
                className="text-start border-2 border-white px-2 py-3"
              >
                {title}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {stats.length > 0 &&
          stats.map((stat, index) => (
            <tr key={index}>
              {keys.map((key, index) => (
                <td key={index} className="border-2 border-white px-2 py-3">
                  {stat[key]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default StatsTable;

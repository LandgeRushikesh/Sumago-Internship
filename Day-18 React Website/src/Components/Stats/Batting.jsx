import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TestData from "../Stats/BattingStats/TestFormat.json";

function Batting() {
  const location = useLocation();
  const [stats, setStats] = useState([]);
  const [category, setCategory] = useState("most runs");
  const [keys, setKeys] = useState([]);
  const format = location.state?.format;

  useEffect(() => {
    if (format === "test") {
      if (category === "most runs") {
        setStats(TestData["Most Runs"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      }
    }
  }, [format, category]);

  useEffect(() => {
    stats.length > 0 ? setKeys(Object.keys(stats[0])) : setKeys([]);
  }, [stats]);

  return (
    <div className="mx-10 my-8 w-full ">
      {
        <table className="mx-auto w-[80%] bg-white">
          <caption>Most Runs</caption>
          <thead>
            <tr>
              {stats.length > 0 &&
                Object.keys(stats[0]).map((title, index) => (
                  <th
                    key={index}
                    className="text-start border-2 border-black px-2 py-3"
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
                    <td key={index} className="border-2 border-black px-2 py-3">
                      {stat[key]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      }
    </div>
  );
}

export default Batting;

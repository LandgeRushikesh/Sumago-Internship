import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TestData from "../Stats/BattingStats/TestFormat.json";
import ODIData from "../Stats/BattingStats/ODIFormat.json";
import T20Data from "../Stats/BattingStats/T20Format.json";
import StatsTable from "./StatsTable";
import Sidebar from "./Sidebar";

function Batting() {
  const location = useLocation();
  const [stats, setStats] = useState([]);
  const [category, setCategory] = useState("Most Runs");
  const [keys, setKeys] = useState([]);
  const format = location.state?.format;

  useEffect(() => {
    if (format === "test") {
      if (category === "Most Runs") {
        setStats(TestData["Most Runs"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Highest Scores") {
        setStats(TestData["Highest Scores"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Hundreds") {
        setStats(TestData["Most Hundreds"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Fiftes") {
        setStats(TestData["Most Fiftes"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Fours") {
        setStats(TestData["Most Fours"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Sixes") {
        setStats(TestData["Most Sixes"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      }
    } else if (format === "ODI") {
      if (category === "Most Runs") {
        setStats(ODIData["Most Runs"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Highest Scores") {
        setStats(ODIData["Highest Scores"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Hundreds") {
        setStats(ODIData["Most Hundreds"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Fiftes") {
        setStats(ODIData["Most Fiftes"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Fours") {
        setStats(ODIData["Most Fours"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Sixes") {
        setStats(ODIData["Most Sixes"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      }
    } else if (format === "T20") {
      if (category === "Most Runs") {
        setStats(T20Data["Most Runs"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Highest Scores") {
        setStats(T20Data["Highest Scores"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Hundreds") {
        setStats(T20Data["Most Hundreds"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Fiftes") {
        setStats(T20Data["Most Fiftes"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Fours") {
        setStats(T20Data["Most Fours"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      } else if (category === "Most Sixes") {
        setStats(T20Data["Most Sixes"]);
        setKeys(stats.length > 0 && Object.keys(stats[0]));
      }
    }
  }, [format, category]);

  useEffect(() => {
    stats.length > 0 ? setKeys(Object.keys(stats[0])) : setKeys([]);
  }, [stats]);

  return (
    <div className="my-8 w-full flex justify-between items-start">
      <div className="sidebar w-[20%] h-full">
        <Sidebar
          category={category}
          setCategory={setCategory}
          format={format}
        />
      </div>
      <div className="stats w-[80%]">
        <StatsTable stats={stats} keys={keys} category={category} />
      </div>
    </div>
  );
}

export default Batting;

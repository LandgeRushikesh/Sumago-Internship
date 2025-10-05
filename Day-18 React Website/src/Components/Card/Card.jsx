import React from "react";

function Card({ player }) {
  return (
    <div className="card bg-white shadow-lg shadow-black w-[400px] py-3 px-4 rounded-lg flex flex-col justify-evenly flex-nowrap flex-shrink-0 hover:scale-[1.02] hover:shadow-xl transition-all ease-in-out duration-300s cursor-pointer">
      <div className="img w-full">
        <img
          src={player.imgURL}
          alt="...."
          className="w-full h-[350px] rounded-lg"
        />
      </div>
      <div className="name w-full">
        <h3 className="text-center text-2xl font-bold">{player.name}</h3>
        <h5 className="text-center text-slate-400">{player.role}</h5>
      </div>
      <div className="achievements">
        <div>
          <strong>Career: </strong>
          {player.career}
        </div>
        <div>
          <strong>Matches: </strong>
          {player.matches}
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <strong>{player.runs && "Runs: "}</strong>
            {player.runs}
          </span>
          <span>
            <strong>{player.wickets && "Wickets: "}</strong>
            {player.wickets}
          </span>
        </div>
        <div>
          <strong>Achievements: </strong>
          <ul className="px-4 list-disc text-sm">
            {player.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;

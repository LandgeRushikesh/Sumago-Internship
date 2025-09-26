import React from "react";

function Students({ names }) {
  return (
    <div>
      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default Students;

import React from "react";

function Subjects({ subjects, teachers }) {
  return (
    <div>
      <ol>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject} - {teachers[index]}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Subjects;

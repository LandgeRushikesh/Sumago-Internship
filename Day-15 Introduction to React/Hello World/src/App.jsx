import "./App.css";
import Greeting from "./Greeting";
import Header from "./Header";
import StudentList from "./StudentList";
import Students from "./Students";
import Subjects from "./Subjects";
import demo from "./assets/react.svg";

function App() {
  const students = ["A", "B", "C", "D", "E"];

  const names = ["Amit", "Varsha", "Rohit"];
  const rollNumbers = [101, 102, 103];

  const subjects = ["Math", "Science", "English"];
  const teachers = ["Mr. Sharma", "Mrs. Mehta", "Ms. Patil"];
  return (
    <>
      <h1>Hello World</h1>
      <img src={demo} alt="..." />
      <img src="/vite.svg" alt="..." />
      <Header />
      <Greeting name="Rushikesh" city="Nashik" />
      <Students names={students} />

      <h2>Student List</h2>
      <StudentList names={names} rollNumbers={rollNumbers} />

      <h2>Subject and teachers</h2>
      <Subjects subjects={subjects} teachers={teachers} />
    </>
  );
}

export default App;

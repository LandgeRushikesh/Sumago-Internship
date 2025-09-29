import "./App.css";
import Greeting from "./Greeting";
import Header from "./Header";
import Profile from "./Profile";
import StudentList from "./StudentList";
import Students from "./Students";
import Subjects from "./Subjects";
import demo from "./assets/react.svg";
import img from "./assets/img1.jpg";
import Hello from "./Hello";

function App() {
  const students = ["A", "B", "C", "D", "E"];

  const names = ["Amit", "Varsha", "Rohit"];
  const rollNumbers = [101, 102, 103];

  const subjects = ["Math", "Science", "English"];
  const teachers = ["Mr. Sharma", "Mrs. Mehta", "Ms. Patil"];

  const student = {
    Name: "Rushikesh Landge",
    Img: img,
    Address: "At post Madsangavi, Nashik",
    Age: 21,
    Bg: "O+",
    Class: "BE",
  };

  const sayHello = () => {
    alert("Hello , Have a Nice Day!!!");
  };

  const sayBye = () => {
    alert("Bye, Have a Nice Day!!!");
  };
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
      <br />
      <h1>Profile</h1>
      <Profile student={student} />

      <Hello sayHello={sayHello} sayBye={sayBye} />
    </>
  );
}

export default App;

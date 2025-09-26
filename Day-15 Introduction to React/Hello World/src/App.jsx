import "./App.css";
import Header from "./Header";
import demo from "./assets/react.svg";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <img src={demo} alt="..." />
      <img src="/vite.svg" alt="..." />
      <Header />
    </>
  );
}

export default App;

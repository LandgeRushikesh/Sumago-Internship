import "./App.css";
import CardCompenent from "./Card";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <CardCompenent
          Img="/img.jpg"
          title="Rohit & Virat"
          text="Rohit Sharma and Virat Kohli are modern Indian cricket legends, known for their exceptional batting prowess, leadership, and significant contributions to the national team's success. "
        />
        <CardCompenent
          Img="/img2.jpg"
          title="Yashasvi Jaiswal"
          text="Yashasvi Jaiswal is a rising Indian cricketer known for his aggressive left-handed batting, exceptional talent, and inspiring 'rags-to-riches' journey from poverty in Uttar Pradesh to international stardom"
        />
      </div>
    </>
  );
}

export default App;

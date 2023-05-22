import CardList from "./components/CardList";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const data = [
  {
    id: 1,
    text: "Subwoofer",
  },
  {
    id: 2,
    text: "Non-porous, washable",
  },
  {
    id: 3,
    text: "Wings",
  },
  {
    id: 4,
    text: "Beveled Bezel",
  },
  {
    id: 5,
    text: "Bezeled Bevel",
  },
  {
    id: 6,
    text: "Seedless",
  },
];

function App() {
  return (
    <div className="App">
      <div className="cardlist">
        <Header />
        <CardList data={data} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

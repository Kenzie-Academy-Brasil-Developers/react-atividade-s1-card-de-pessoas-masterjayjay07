import logo from "./logo.svg";
import "./App.css";
import Developers from "./components/Developer";

function App() {
  let devs = [
    {
      name: "Gabriel",
      age: 19,
      country: "Brasil",
    },
    {
      name: "Filipe",
      age: 28,
      country: "Brasil",
    },
    {
      name: "Mariana",
      age: 24,
      country: "Itália",
    },
  ];
  return (
    <div className="App">
      <div className="App-header">
        <Developers name="Gabriel" age="19" country="Brasil" />
        <Developers name="Filipe" age="28" country="Brasil" />
        <Developers name="Mariana" age="24" country="Itália" />
        <Developers name="Johão Pedro" age="26" country="Brasil" />
      </div>
    </div>
  );
}

export default App;

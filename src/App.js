import "./App.css";
import Journal from "./components/Journal.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Journal />
        <Journal />
        <Journal />
        <Journal />
        <Journal />
        <button>Add Bike</button>
      </header>
    </div>
  );
}

export default App;

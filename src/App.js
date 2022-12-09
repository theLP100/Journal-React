import "./App.css";
import JournalList from "./components/JournalList.js";

const guestName = "LP";

function App() {
  return (
    <div>
      <header>
        <JournalList />
        <button>Add Journal</button>
      </header>
      <p>Welcome {guestName}!</p>
      <p>We're glad you're here.</p>
    </div>
  );
}

export default App;

import "./App.css";
//import Navbar from './components/Navbar.js
import JournalList from "./components/JournalList.js";
import Post from "./components/Journal.js";

const guestName = "LP";

function App() {
  return (
    <div>
      <header>
        <JournalList />
        <button>Add Journal</button>
        <Post />
      </header>
      <p>Welcome {guestName}!</p>
      <p>We're glad you're here.</p>
    </div>
  );
}

export default App;

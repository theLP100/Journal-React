import "./App.css";
//import Navbar from './components/Navbar.js
import JournalList from "./components/JournalList.js";

const guestName = "LP";

function App() {
  const journalsList = [
    {
      id: 1,
      design: "Testing",
      sub_design: "Rohan",
      dye: "Bison Brown",
    },
    {
      id: 2,
      design: "Lord of the Rings",
      sub_design: "Gondor",
      dye: "Bison Brown",
    },
  ];

  return (
    <div>
      <header>
        <JournalList journalsList={JournalList} />
        <button>Add Journal</button>
      </header>
      <p>Welcome {guestName}!</p>
      <p>We're glad you're here.</p>
    </div>
  );
}

export default App;

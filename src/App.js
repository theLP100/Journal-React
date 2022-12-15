import "./App.css";
//import Navbar from './components/Navbar.js
import JournalList from "./components/JournalList.js";
// import Navbar from "./components/Navbar.js";
import { useState } from "react";

const guestName = "LP";

const INITIAL_JOURNALS = [
  {
    id: 1,
    design: "Lord of the Rings",
    sub_design: "Rohan",
    dye: "Bison Brown",
    price: 60,
  },
  {
    id: 2,
    design: "Lord of the Rings",
    sub_design: "Gondor",
    dye: "Bison Brown",
    price: 60,
  },
  {
    id: 3,
    design: "Astrology",
    sub_design: "Libra",
    dye: "Canyon Tan",
    price: 60,
  },
  {
    id: 4,
    design: "Fantasy Bird",
    sub_design: "",
    dye: "Red Gradient",
    price: 70,
  },
];

function App() {
  const initialCopy = INITIAL_JOURNALS.map((journal) => {
    return { ...journal }; //THIS IS VERY IMPORTANT.  DON'T FORGET FOR CHAT LOG.
  });

  const [journalsList, setJournalsList] = useState(initialCopy);

  const updatePrice = (journalId, updatedPrice) => {
    //when we update our data, we need to make a new array.
    const newJournalsList = [];
    for (const journal of journalsList) {
      if (journal.id !== journalId) {
        newJournalsList.push(journal);
      } else {
        const newJournal = {
          ...journal,
          price: updatedPrice,
        };
        newJournalsList.push(newJournal);
      }
    }
    setJournalsList(newJournalsList); //this is the way to update the state.  this is very important.
    //we can't treat them like normal variables.
  };

  const deleteJournal = (journalId) => {
    console.log("Delete Journal called");
    const newJournalsList = [];
    for (const journal of newJournalsList) {
      //this could be done with something called filter.
      if (journal.id !== journalId) {
        newJournalsList.push(journal);
      }
    }
    setJournalsList(newJournalsList);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <JournalList
        journalsList={journalsList}
        updatePrice={updatePrice}
        deleteJournal={deleteJournal}
      />
      <button>Add Journal</button>
      <p>Welcome {guestName}!</p>
      <p>We're glad you're here.</p>
    </div>
  );
}

export default App;

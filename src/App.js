import "./App.css";
//import Navbar from './components/Navbar.js
import JournalList from "./components/JournalList.js";
// import Navbar from "./components/Navbar.js";
import { useState, useEffect } from "react";
import axios from "axios";

const guestName = "LP";

// const INITIAL_JOURNALS = [
//   {
//     id: 1,
//     design: "Lord of the Rings",
//     sub_design: "Rohan",
//     dye: "Bison Brown",
//     price: 60,
//   },
//   {
//     id: 2,
//     design: "Lord of the Rings",
//     sub_design: "Gondor",
//     dye: "Bison Brown",
//     price: 60,
//   },
//   {
//     id: 3,
//     design: "Astrology",
//     sub_design: "Libra",
//     dye: "Canyon Tan",
//     price: 60,
//   },
//   {
//     id: 4,
//     design: "Fantasy Bird",
//     sub_design: "",
//     dye: "Red Gradient",
//     price: 70,
//   },
// ];

function App() {
  const [journalsList, setJournalsList] = useState([]);
  const URL = "http://localhost:5000/journal";
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        //console.log(res);
        const journalsAPIResCopy = res.data.map((journal) => {
          return {
            id: journal.id,
            design: journal.design,
            "sub-design": journal.sub_design,
            //price isn't in the database yet.  change that.
            dye: journal.dye,
          };
        });
        setJournalsList(journalsAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //the following isn't needed now that we have the journalAPIResCopy
  // const initialCopy = INITIAL_JOURNALS.map((journal) => {
  //   return { ...journal }; //THIS IS VERY IMPORTANT.  DON'T FORGET FOR CHAT LOG.
  // });

  // const [journalsList, setJournalsList] = useState(journalsAPIResCopy);

  const updatePrice = (journalId, updatedPrice) => {
    //when we update our data, we need to make a new array.
    console.log("updatePrice is being called for id", journalId); //it's calling the wrong id.  look into how it's getting journal id.
    const newJournalsList = [];
    axios
      .patch(`${URL}/${journalId}/${updatedPrice}`)
      .then(() => {
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
      })
      .catch((err) => {
        console.log(err);
      });
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

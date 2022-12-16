import PropTypes from "prop-types";
import React from "react";
import "./Journal.css";

//this sets up Journal as a component.
function Journal(props) {
  //note: you don't need to rename these variables if you don't want to.
  const journalDesign = props.design;
  const journalId = props.id;
  const journalSubDesign = props.sub_design;
  const journalDye = props.dye;
  const journalPrice = props.price;
  const updatePrice = props.updatePrice;
  const deleteJournal = props.deleteJournal;

  function getColorFromDye(dye) {
    //I bet you could refactor this to reference values in a dictionary to do for all journals. (key: "bison brown", value: "brown")
    if (dye === "Bison Brown") {
      return "brown";
    }
    if (dye === "red") {
      return "red";
    }
  }

  //potential refactoring: for increaseJournalPrice and decreaseJournalPrice
  //the following led to bugs of infinitely decreasing price for last journal, not sure why.
  // function changeJournalPrice(inc) {
  //   if (inc) {
  //     updatePrice(journalId, journalPrice + 1);
  //   } else {
  //     updatePrice(journalId, journalPrice - 1);
  //   }
  // }
  const increaseJournalPrice = () => {
    let newjournalPrice = journalPrice + 1;
    updatePrice(newjournalPrice); //you can do this on one line if you want:
    //setJournalPrice(newjournalPrice + 1)
  };

  const decreaseJournalPrice = () => {
    updatePrice(journalPrice - 1);
  };

  return (
    //specify anything you want to be rendered to the user
    <div>
      <h2 className="journal__id">Journal {journalId}</h2>
      <ul>
        <li>Design: {journalDesign}</li>
        <li>Sub-Design: {journalSubDesign}</li>
        <li>
          <span style={{ color: getColorFromDye(journalDye) }}>
            Dye: {journalDye}
          </span>
        </li>
        <li>Price: {journalPrice}</li>
      </ul>
      <button onClick={increaseJournalPrice}>Increase Price</button>
      <button onClick={decreaseJournalPrice}>Decrease Price</button>
      <button onClick={() => deleteJournal(journalId)}>Delete</button>
    </div>
  );
}
//arrow function is very important above.

Journal.propTypes = {
  id: PropTypes.number.isRequired,
  //add all other types here.
  updatePrice: PropTypes.func.isRequired,
  deleteJournal: PropTypes.func.isRequired,
};

export default Journal;

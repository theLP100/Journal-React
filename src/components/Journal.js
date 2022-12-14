import PropTypes from "prop-types";
import React from "react";
import "./Journal.css";
import { useState } from "react";

//this sets up Journal as a component.
function Journal(props) {
  const journalDesign = props.design;
  const journalId = props.id;
  const journalSubDesign = props.sub_design;
  const journalDye = props.dye;
  const [journalPrice, setJournalPrice] = useState(props.price); //need to fix this error
  function getColorFromDye(dye) {
    if (dye === "Bison Brown") {
      return "brown";
    }
    if (dye === "red") {
      return "red";
    }
  }
  // the following needs debugging.
  //this currently isn't working. try to get it working and make it work.
  const increaseJournalPrice = () => {
    let newjournalPrice = journalPrice + 1;
    setJournalPrice(newjournalPrice); //you can do this on one line if you want:
    //setJournalPrice(newjournalPrice + 1)
  };

  const decreaseJournalPrice = () => {
    setJournalPrice(journalPrice + 1);
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
    </div>
  );
}

//potential refactoring:
// function changeBikePrice(inc){
//   if(inc){
//     setBikePrice
//   }
// }

Journal.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Journal;

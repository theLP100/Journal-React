import PropTypes from "prop-types";
import Journal from "./Journal";

//below i don't know if /ul is right to hvae under push, I think it's causing problems.

function JournalList(props) {
  const journalsList = props.journalsList;
  const journalComponents = [];
  const updatePrice = props.updatePrice; //we pass this down with props.
  const deleteJournal = props.deleteJournal;

  //the following can be done in a map function if you prefer (to a for loop)
  for (const journal of journalsList) {
    journalComponents.push(
      <Journal
        key={journal.id}
        id={journal.id}
        design={journal.design}
        sub_design={journal.sub_design}
        dye={journal.dye}
        price={journal.price}
        updatePrice={updatePrice}
        deleteJournal={deleteJournal} //something is wrong here.
      />
    );
  }

  return <div>{journalComponents}</div>;
}

//it's helpful to change this part first when you're updating stuff.
JournalList.propTypes = {
  journalsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      design: PropTypes.string.isRequired,
      sub_design: PropTypes.string,
      dye: PropTypes.string.isRequired,
      price: PropTypes.number,
    })
  ),
  updatePrice: PropTypes.func.isRequired, //we're passing this from app to journallist, and then we'll pass it down to journal.
  deleteJournal: PropTypes.func.isRequired,
};
export default JournalList;

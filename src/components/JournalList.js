import PropTypes from "prop-types";
import Journal from "./Journal";
//below i don't know if /ul is right to hvae under push, I think it's causing problems.

function JournalList(props) {
  const journalsList = props.journalsList;
  const journalComponents = [];
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
      />
    );
  }

  return <div>{journalComponents}</div>;
}

JournalList.propTypes = {
  journalsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      design: PropTypes.string.isRequired,
      //put dye and sub-design here if they're not required.
    })
  ),
};
export default JournalList;

import PropTypes from "prop-types";
import Journal from "./Journal";
//below i don't know if /ul is right to hvae under push, I think it's causing problems.

function JournalList(props) {
  const journalsList = props.journalsList;
  const journalComponents = [];
  for (const journal of journalsList) {
    console.log("im in the for loop of JournalList function" + journal);
    journalComponents.push(
      <ul key={journal.id}>
        <Journal
          id={journal.id}
          design={journal.design}
          sub_design={journal.sub_design}
          dye={journal.dye}
          price={journal.price}
        />
      </ul>
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

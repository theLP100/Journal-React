import PropTypes from "prop-types";
import Journal from "./Journal";

function JournalList({ journalsList }) {
  const journalComponents = [];
  for (const journal of journalsList) {
    journalComponents.push(
      <li key={journal.id}>
        <Journal
          id={journal.id}
          design={journal.design}
          sub_design={journal.sub_design}
          dye={journal.dye}
        />
      </li>
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

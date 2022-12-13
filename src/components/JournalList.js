import Journal from "./Journal";

function JournalList({ journalsList }) {
  const journalComponents = [];
  for (const journal of journalList) {
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

  return { <div>journalComponents</div> };
}

export default JournalList;

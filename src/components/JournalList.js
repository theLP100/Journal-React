import Journal from "./Journal";

function JournalList() {
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

  return journalsList.map((journal) => (
    <li key={journal.id}>
      <Journal
        id={journal.id}
        design={journal.design}
        sub_design={journal.sub_design}
        dye={journal.dye}
      />
    </li>
  ));
}

export default JournalList;

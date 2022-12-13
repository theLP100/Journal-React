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
    <Journal id={id} design={design} sub_design={sub_design} dye={dye} />
  ));
}

export default JournalList;

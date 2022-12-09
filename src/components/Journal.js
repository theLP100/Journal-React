import "./Journal.css";

//this sets up Journal as a component.
function Journal() {
  const myJournal = {
    id: 1,
    design: "Lord of the Rings",
    sub_design: "Rohan",
    dye: "Bison Brown",
  };
  return (
    //specify anything you want to be rendered to the user
    <div>
      <h2 className="journal__design">{myJournal.design}</h2>
      <ul>
        <li>{myJournal.sub_design}</li>
        <li>{myJournal.dye}</li>
      </ul>
    </div>
  );
}

export default Journal;

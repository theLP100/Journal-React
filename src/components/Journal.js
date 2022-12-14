import "./Journal.css";

//this sets up Journal as a component.
function Journal(props) {
  const journalDesign = props.design;
  const journalId = props.id;
  const journalSubDesign = props.sub_design;
  const journalDye = props.dye;

  return (
    //specify anything you want to be rendered to the user
    <div>
      <h2 className="journal__design">{journalDesign}</h2>
      <ul>
        <li>{journalId}</li>
        <li>{journalSubDesign}</li>
        <li>{journalDye}</li>
      </ul>
    </div>
  );
}

//add journal button code: I don't know if this is the right place for the following code
const Post = () => {
  const printMessage = () => {
    console.log("Hello! We're in printMessage!");
  };

  return (
    <section>
      <button onClick={printMessage}>Add Journal</button>
    </section>
  );
};
//end add journal button code.

export default Journal;

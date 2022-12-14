import PropTypes from "prop-types";
import "./Journal.css";

//this sets up Journal as a component.
//you can change props to be a list of attributes.
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

Journal.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Journal;

import PropTypes from "prop-types";

export default function ActiveFilter(props) {
  return (
    <p>
      Filtre actif :{" "}
      <span className="current-filter">
        {props.selectedGroup}
        <i
          onClick={props.displayAllExercises}
          className="bi bi-x-circle ms-2"
        ></i>
      </span>
    </p>
  );
}

ActiveFilter.propTypes = {
  selectedGroup: PropTypes.string.isRequired,
  displayAllExercises: PropTypes.func.isRequired,
};

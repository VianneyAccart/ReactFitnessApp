import PropTypes from "prop-types";
import FilterItem from "./FilterItem";

function FilterDropdown(props) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filtrer
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <p className="dropdown-item" onClick={props.displayAllExercises}>
            Tous
          </p>
        </li>
        <FilterItem
          muscularGroup="Pectoraux"
          filterMethod={props.showExercisesFilteredByMuscularGroup}
        />
        <FilterItem
          muscularGroup="Dos"
          filterMethod={props.showExercisesFilteredByMuscularGroup}
        />
        <FilterItem
          muscularGroup="Bras"
          filterMethod={props.showExercisesFilteredByMuscularGroup}
        />
        <FilterItem
          muscularGroup="Jambes"
          filterMethod={props.showExercisesFilteredByMuscularGroup}
        />
      </ul>
    </div>
  );
}

FilterDropdown.propTypes = {
  displayAllExercises: PropTypes.func.isRequired,
  showExercisesFilteredByMuscularGroup: PropTypes.func.isRequired,
};

export default FilterDropdown;

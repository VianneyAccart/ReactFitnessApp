import PropTypes from "prop-types";

export default function FilterItem(props) {
  return (
    <li>
      <p
        className="dropdown-item"
        onClick={() => props.filterMethod(props.muscularGroup)}
      >
        {props.muscularGroup}
      </p>
    </li>
  );
}

FilterItem.propTypes = {
  muscularGroup: PropTypes.string.isRequired,
  filterMethod: PropTypes.func.isRequired,
};

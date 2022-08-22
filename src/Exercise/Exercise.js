import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Exercise(props) {
  const { exercise } = props;
  return (
    <li className="list-group-item">
      <Link to={`/exercises/${exercise.name}`}>{exercise.name}</Link>
    </li>
  );
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired,
};

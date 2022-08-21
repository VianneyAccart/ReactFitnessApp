import PropTypes from "prop-types";

export default function Exercise(props) {
  const { exercise } = props;
  return <li className="list-group-item">{exercise.name}</li>;
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired,
};

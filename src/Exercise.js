import { Component } from "react";
import PropTypes from "prop-types";

class Exercise extends Component {
  render() {
    const { exercise } = this.props;
    return <li className="list-group-item">{exercise.name}</li>;
  }
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired,
};

export default Exercise;

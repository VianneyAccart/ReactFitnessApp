import { Component } from "react";

class Exercise extends Component {
  render() {
    const { exercise } = this.props;
    return <li className="list-group-item">{exercise.name}</li>;
  }
}

export default Exercise;

import { Component } from "react";
import exercises from "./data.mock";
import Exercise from "./Exercise";
import "./index.css";

class ExerciceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: exercises,
      selectedGroup: "",
    };
    this.initialExercises = exercises;
  }

  showExercisesFromMuscularGroup = (muscularGroup) => {
    let filteredExercises = exercises.filter(
      (exercise) => exercise.muscularGroup === muscularGroup
    );
    this.setState({
      exercises: filteredExercises,
      selectedGroup: muscularGroup,
    });
  };

  displayAllExercises = () => {
    this.setState({ exercises: this.initialExercises, selectedGroup: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between my-3">
          <h1>Liste des exercices</h1>
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
                <p className="dropdown-item" onClick={this.displayAllExercises}>
                  Tous
                </p>
              </li>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() =>
                    this.showExercisesFromMuscularGroup("Pectoraux")
                  }
                >
                  Pectoraux
                </p>
              </li>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() => this.showExercisesFromMuscularGroup("Jambes")}
                >
                  Jambes
                </p>
              </li>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() => this.showExercisesFromMuscularGroup("Dos")}
                >
                  Dos
                </p>
              </li>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() => this.showExercisesFromMuscularGroup("Bras")}
                >
                  Bras
                </p>
              </li>
            </ul>
          </div>
        </div>

        {this.state.selectedGroup ? (
          <p>
            Filtre actif :{" "}
            <span className="current-filter">
              {this.state.selectedGroup}
              <i
                onClick={this.displayAllExercises}
                className="bi bi-x-circle ms-2"
              ></i>
            </span>
          </p>
        ) : (
          ""
        )}
        <ul className="list-group list-group-flush">
          {this.state.exercises.map((exercise, index) => {
            return <Exercise key={index} exercise={exercise} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ExerciceList;

import { Component } from "react";
import ActiveFilter from "../Filtering/ActiveFilter";
import Exercise from "./Exercise";
import FilterDropdown from "../Filtering/FilterDropdown";
import "../index.css";
import axios from "axios";
import SearchBar from "../Filtering/SearchBar";

class ExerciceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      selectedGroup: "",
      searchValue: "",
    };
    this.initialExercises = [];
  }

  componentDidMount() {
    this.getExercises();
  }

  getExercises = () => {
    axios
      .get("https://mocki.io/v1/2f2ca3e8-5d39-499d-983e-266957dbbea3")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ exercises: data });
        this.initialExercises = data;
      });
  };

  showExercisesFilteredByMuscularGroup = (muscularGroup) => {
    let filteredExercises = this.state.exercises.filter(
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

  searchValueChange = (value) => {
    this.setState({ searchValue: value }, this.showState);
  };

  showState = () => {
    console.log(this.state.searchValue);
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between my-3">
          <h1>Liste des exercices</h1>
          <div className="d-flex">
            <SearchBar searchValueChange={this.searchValueChange} />
            <FilterDropdown
              displayAllExercises={this.displayAllExercises}
              showExercisesFilteredByMuscularGroup={
                this.showExercisesFilteredByMuscularGroup
              }
            />
          </div>
        </div>

        {this.state.selectedGroup ? (
          <ActiveFilter
            selectedGroup={this.state.selectedGroup}
            displayAllExercises={this.displayAllExercises}
          />
        ) : (
          ""
        )}
        <ul className="list-group list-group-flush">
          {this.state.exercises
            .filter((exercise) =>
              exercise.name.includes(this.state.searchValue)
            )
            .map((exercise, index) => {
              return <Exercise key={index} exercise={exercise} />;
            })}
        </ul>
      </div>
    );
  }
}

export default ExerciceList;

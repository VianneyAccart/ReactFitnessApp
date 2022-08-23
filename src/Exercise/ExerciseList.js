import React, { useContext, useEffect } from "react";
import ActiveFilter from "../Filtering/ActiveFilter";
import Exercise from "./Exercise";
import FilterDropdown from "../Filtering/FilterDropdown";
import "../index.css";
import axios from "axios";
import SearchBar from "../Filtering/SearchBar";
import PageTitleContext from "../Contexts/PageTitleContext";

export default function ExerciceList() {
  const [exercises, setExercises] = React.useState([]);
  useEffect(() => {
    getExercises();
  }, []);
  const [initialExercises, setInitialExercises] = React.useState(exercises);
  const [selectedGroup, setSelectedGroup] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const { pageTitle, setPageTitle } = useContext(PageTitleContext);
  useEffect(() => {
    setPageTitle("Exercices");
  }, [setPageTitle]);

  const getExercises = () => {
    axios
      .get("https://mocki.io/v1/2f2ca3e8-5d39-499d-983e-266957dbbea3")
      .then((response) => response.data)
      .then((data) => {
        setExercises(data);
        setInitialExercises(data);
      });
  };

  const showExercisesFilteredByMuscularGroup = (muscularGroup) => {
    let filteredExercises = exercises.filter(
      (exercise) => exercise.muscularGroup === muscularGroup
    );
    setExercises(filteredExercises);
    setSelectedGroup(muscularGroup);
  };

  const displayAllExercises = () => {
    setExercises(initialExercises);
    setSelectedGroup("");
  };

  const searchValueChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h3>{pageTitle}</h3>
        <div className="d-flex align-items-center">
          <SearchBar searchValueChange={searchValueChange} />
          <FilterDropdown
            displayAllExercises={displayAllExercises}
            showExercisesFilteredByMuscularGroup={
              showExercisesFilteredByMuscularGroup
            }
          />
        </div>
      </div>

      {selectedGroup ? (
        <ActiveFilter
          selectedGroup={selectedGroup}
          displayAllExercises={displayAllExercises}
        />
      ) : (
        ""
      )}
      <ul className="list-group list-group-flush">
        {exercises
          .filter((exercise) =>
            exercise.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((exercise, index) => {
            return <Exercise key={index} exercise={exercise} />;
          })}
      </ul>
    </div>
  );
}

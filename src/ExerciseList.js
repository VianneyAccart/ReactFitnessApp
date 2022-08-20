import { Component } from "react";
import exercises from "./data.mock";
import Exercise from "./Exercise";

class ExerciceList extends Component {
  render() {
    function getMuscularGroups() {
      let muscularGroups = [];
      exercises.forEach((exercise) => {
        if (!muscularGroups.includes(exercise.muscularGroup))
          muscularGroups.push(exercise.muscularGroup);
      });
      return muscularGroups;
    }

    const muscularGroups = getMuscularGroups();

    return (
      <div>
        <h1 className="text-center">Exercises list</h1>
        <hr />
        <div className="d-flex mb-3">
          <button className="me-2">Tous</button>
          <button className="me-2">Pectoraux</button>
          <button className="me-2">Jambes</button>
          <button className="me-2">Dos</button>
          <button className="me-2">Bras</button>
        </div>
        {muscularGroups.map((muscularGroup, index) => {
          return (
            <div key={index}>
              <h2>{muscularGroup}</h2>
              <ul>
                {exercises
                  .filter(
                    (exercise) => exercise.muscularGroup === muscularGroup
                  )
                  .map((exercise, index) => {
                    return <Exercise key={index} exercise={exercise} />;
                  })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExerciceList;

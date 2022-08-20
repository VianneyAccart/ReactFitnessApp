import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import ExerciceList from "./ExerciseList";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <ExerciceList />
      </div>
    );
  }
}

export default App;

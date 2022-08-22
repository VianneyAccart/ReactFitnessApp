import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ExerciseList from "./Exercise/ExerciseList";
import Navbar from "./Navbar";
import ExerciseDetails from "./Exercise/ExerciseDetails";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<ExerciseList />} />
        <Route path="/exercises/:exercise" element={<ExerciseDetails />} />
      </Routes>
    </div>
  );
}

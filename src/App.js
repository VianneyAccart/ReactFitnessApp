import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ExerciseList from "./Exercise/ExerciseList";
import Navbar from "./Navbar";
import ExerciseDetails from "./Exercise/ExerciseDetails";
import PageTitleContext from "./Contexts/PageTitleContext";
import { useState } from "react";

export default function App() {
  const [pageTitle, setPageTitle] = useState();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PageTitleContext.Provider
              value={{ pageTitle: pageTitle, setPageTitle: setPageTitle }}
            >
              <Home />
            </PageTitleContext.Provider>
          }
        />
        <Route
          path="/exercises"
          element={
            <PageTitleContext.Provider
              value={{ pageTitle: pageTitle, setPageTitle: setPageTitle }}
            >
              <ExerciseList />
            </PageTitleContext.Provider>
          }
        />
        <Route
          path="/exercises/:exercise"
          element={
            <PageTitleContext.Provider
              value={{ pageTitle: pageTitle, setPageTitle: setPageTitle }}
            >
              <ExerciseDetails />
            </PageTitleContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

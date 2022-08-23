import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTitleContext from "../Contexts/PageTitleContext";

export default function ExerciseDetails() {
  const { pageTitle, setPageTitle } = useContext(PageTitleContext);
  useEffect(() => {
    setPageTitle("Détails de l'exercice : ");
  }, [setPageTitle]);

  let params = useParams();
  return (
    <div className="container">
      <h3 className="my-3">
        {pageTitle} <span className="fw-light">{params.exercise}</span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod
        veritatis, libero accusantium sed, in possimus beatae iusto quas
        officiis deserunt? Architecto adipisci nam error doloremque iste nostrum
        atque a?
      </p>
    </div>
  );
}

import { useParams } from "react-router-dom";

export default function ExerciseDetails() {
  let params = useParams();
  return (
    <div className="container">
      <h3 className="my-3">{params.exercise}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod
        veritatis, libero accusantium sed, in possimus beatae iusto quas
        officiis deserunt? Architecto adipisci nam error doloremque iste nostrum
        atque a?
      </p>
    </div>
  );
}

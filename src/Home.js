import { useContext, useEffect } from "react";
import PageTitleContext from "./Contexts/PageTitleContext";

export default function Home() {
  const { pageTitle, setPageTitle } = useContext(PageTitleContext);
  useEffect(() => {
    setPageTitle("Bienvenue sur Fitness App");
  }, [setPageTitle]);

  return (
    <div className="container">
      <h3 className="my-3">{pageTitle}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod
        veritatis, libero accusantium sed, in possimus beatae iusto quas
        officiis deserunt? Architecto adipisci nam error doloremque iste nostrum
        atque a?
      </p>
    </div>
  );
}

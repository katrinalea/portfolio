import Portfolio from "./welcome";
import { useState } from "react";
import FullStack from "./full-stack";
import FrontEnd from "./front-end";
import Kata from "./kata";
import "./style.css";

function App(): JSX.Element {
  const [render, setRender] = useState<string>("welcome");

  const handleRender = (renderDirection: string) => {
    setRender(renderDirection);
  };

  return (
    <div>
      {render === "welcome" && <Portfolio setRender={handleRender} />}
      {render === "full-stack" && <FullStack setRender={handleRender} />}
      {render === "front-end" && <FrontEnd setRender={handleRender} />}
      {render === "kata" && <Kata setRender={handleRender} />}
    </div>
  );
}

export default App;

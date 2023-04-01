import "./style.css";
import { createRoot } from "react-dom/client";
import Keyboard from "./keyboard";

function Calculator() {
  return (
    <div>
      <div className="result">
        <div className="history">
          <div className="history__value"></div>
        </div>
        <div className="output">
          <p className="output__value"></p>
        </div>
      </div>
      <Keyboard />
    </div>
  );
}

const root = createRoot(document.getElementById("calculator"));
root.render(<Calculator />);

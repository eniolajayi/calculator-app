import { createRoot } from "react-dom/client";
import "./style.css";

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
    </div>
  );
}

const root = createRoot(document.getElementById("calculator"));
root.render(<Calculator />);

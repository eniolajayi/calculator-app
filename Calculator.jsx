import { useState } from "react";
import Keyboard from "./keyboard";

function Calculator() {
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState("");

  return (
    <div>
      <div className="result">
        <div className="history">
          <div className="history__value">{history}</div>
        </div>
        <div className="output">
          <p className="output__value">{output}</p>
        </div>
      </div>
      <Keyboard
        onButtonPressed={(data) => {
          console.log(data);
          if (data.type === "operator" && data.name === "clear-entry") {
            let newHistory = history.substring(0, history.length - 1);
            setHistory(newHistory);
          }
          if (data.type === "operator" && data.name === "clear-all") {
            setHistory("");
            setOutput("");
          }
          if (data.type === "number") {
            setHistory(history + data.symbol);
          }
        }}
      />
    </div>
  );
}

export default Calculator;

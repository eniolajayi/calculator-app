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
        }}
      />
    </div>
  );
}

export default Calculator;

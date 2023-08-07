import { useState } from "react";
import { css } from "@acab/ecsstatic";
import keys from "./data";

function Calculator() {
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState("");

  const calculate = (data) => {
    return eval(data);
  };

  const handleButtonClick = (event, data) => {
    if (data.type === "operator" && data.name === "clear-entry") {
      let newHistory = history.substring(0, history.length - 1);
      setHistory(newHistory);
    } else if (data.type === "operator" && data.name === "clear-all") {
      setHistory("");
      setOutput("");
    } else if (data.type === "operator" && data.name === "equals") {
      let result = calculate(history);
      setOutput(result);
    } else if (data.type === "number" || data.type === "operator") {
      setHistory(history + data.symbol);
    } else {
      console.log("nill");
    }
  };

  return (
    <div className={wrapper}>
      <div className={calculator}>
        <div className={result}>
          <div className="history">
            <div className="history__value">{history}</div>
          </div>
          <div className="output">
            <p className="output__value">{output}</p>
          </div>
        </div>
        <div className={keyboard}>
          {keys.map((k, idx) => {
            return (
              <button
                key={idx}
                className={`${
                  k.type === "operator" ? k.name : k.type
                } ${button}`}
                onClick={(e) => handleButtonClick(e, k)}
              >
                {k.symbol === "*" ? <>&times;</> : k.symbol}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const wrapper = css`
  inline-size: 100%;
  min-block-size: 100vh;
  display: grid;
  place-items: center;
`;

const calculator = css`
  max-inline-size: 220px;
  min-inline-size: 220px;
`;

const result = css`
  overflow-x: scroll;
  background-color: #090400;
`;

const keyboard = css`
  display: grid;
  background-color: #eee;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
`;

const button = css`
  all: unset;
  font: inherit;
  color: #090400;
  border: 0.5px solid;
  padding: 0.5rem 1rem;
  text-align: center;
  font-family: sans-serif;

  &:hover,
  &:focus {
    color: #db854b;
  }

  &.equals {
    grid-column: 4 / 5;
    grid-row: 6 / 2;
  }

  &.clear-entry {
    grid-column: 3/4;
    grid-row: 6/5;
    position: absolute;
    display: none;
  }
`;

export default Calculator;

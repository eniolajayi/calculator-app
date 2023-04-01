function Keyboard({ onButtonPressed, buttonKeys = KEYS }) {
  const handleButtonClick = (event, data) => {
    onButtonPressed(data);
  };

  return (
    <div className="keyboard">
      {buttonKeys.map((k, idx) => {
        return (
          <button
            key={idx}
            data-keytype={k.type}
            className={`key ${k.type}`}
            onClick={(e) => handleButtonClick(e, k)}
          >
            {k.symbol}
          </button>
        );
      })}
    </div>
  );
}

const KEYS = [
  {
    type: "operator",
    symbol: "CE",
    name: "clear-entry",
  },
  {
    type: "operator",
    symbol: "C",
    name: "clear-all",
  },
  {
    type: "operator",
    symbol: "%",
    name: "percent",
  },
  {
    type: "operator",
    symbol: "÷",
    name: "divide",
  },
  {
    type: "number",
    symbol: "7",
    name: "seven",
  },
  {
    type: "number",
    symbol: "8",
    name: "eight",
  },
  {
    type: "number",
    symbol: "9",
    name: "nine",
  },
  {
    type: "operator",
    symbol: "×",
    name: "multiply",
  },
  {
    type: "number",
    symbol: "4",
    name: "four",
  },
  {
    type: "number",
    symbol: "5",
    name: "five",
  },
  {
    type: "number",
    symbol: "6",
    name: "six",
  },
  {
    type: "operator",
    symbol: "-",
    name: "subtract",
  },
  {
    type: "number",
    symbol: "1",
    name: "one",
  },
  {
    type: "number",
    symbol: "2",
    name: "two",
  },
  {
    type: "number",
    symbol: "3",
    name: "three",
  },
  {
    type: "operator",
    symbol: "+",
    name: "add",
  },
  {
    type: "empty",
    symbol: "",
    name: "empty",
  },
  {
    type: "number",
    symbol: "0",
    name: "zero",
  },
  {
    type: "empty",
    symbol: "",
    name: "empty",
  },
  {
    type: "operator",
    symbol: "=",
    name: "equals",
  },
];

export default Keyboard;

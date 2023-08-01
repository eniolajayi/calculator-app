import keys from "./data";

function Keyboard({ onButtonPressed }) {
  const handleButtonClick = (event, data) => {
    onButtonPressed(data);
  };

  return (
    <div className="keyboard">
      {keys.map((k, idx) => {
        return (
          <button
            key={idx}
            data-action={k.type === "operator" ? k.name : k.type}
            className={`key ${k.type}`}
            onClick={(e) => handleButtonClick(e, k)}
          >
            {k.symbol === "*" ? <>&times;</> : k.symbol}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;

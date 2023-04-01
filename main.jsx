import { createRoot } from "react-dom/client";

function Calculator() {
  return <h1>Calculator</h1>;
}

const root = createRoot(document.getElementById("calculator"));
root.render(<Calculator />);

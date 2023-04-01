import "./style.css";
import { createRoot } from "react-dom/client";
import Calculator from "./Calculator";

const root = createRoot(document.getElementById("calculator"));
root.render(<Calculator />);

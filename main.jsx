import "./style.css";
import { createRoot } from "react-dom/client";
import Calculator from "./Calculator";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("calculator"));
root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);

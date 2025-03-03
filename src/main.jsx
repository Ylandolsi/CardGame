import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Page from "./pages/memoryGamePage";
document.getElementById("root").style.height = "100%";
document.getElementById("root").style.width = "100%";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);

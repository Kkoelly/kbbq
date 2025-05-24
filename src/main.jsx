import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { HashRouter, Route, Routes } from "react-router";
import Home from "./Home";
import RecipePage from "./RecipePage";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/recipe" element={<RecipePage />}></Route>
    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

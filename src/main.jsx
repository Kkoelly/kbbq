import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

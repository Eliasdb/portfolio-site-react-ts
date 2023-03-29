import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContext from "./context/context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContext>
    <App />
  </AppContext>
);

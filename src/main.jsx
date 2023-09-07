import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/HelloWorld";
import { FirstApp } from "./Components/FirstApp";
import { CounterApp } from "./Components/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <CounterApp value={2} />
  </React.StrictMode>
);

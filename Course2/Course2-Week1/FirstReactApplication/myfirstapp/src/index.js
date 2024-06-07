import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
function render() {
  root.render(<App />);
}

setInterval(render, 1000); // Update the UI every second to show the current time. 1000 milliseconds = 1 second.

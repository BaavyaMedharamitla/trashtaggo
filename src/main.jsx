import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // <--- THIS line must be present to activate your global theme!
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
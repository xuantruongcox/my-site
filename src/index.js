import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeUIProvider } from "theme-ui";
import roxinePreset from './roxine-preset';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeUIProvider theme={roxinePreset}>
    <App />

  </ThemeUIProvider>
);

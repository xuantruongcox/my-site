import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { ThemeUIProvider } from "theme-ui";
import roxinePreset from '@coxdev/roxine-preset';
import { BrowserRouter as Router } from "react-router-dom";
import 'animate.css'
// import isMobile from 'is-mobile';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeUIProvider theme={roxinePreset}>
        <App />
      </ThemeUIProvider>
    </Router>
  </React.StrictMode>
);

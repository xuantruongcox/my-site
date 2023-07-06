import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import AboutPage from "./pages/about/index"
import { ThemeUIProvider } from "theme-ui";
import roxinePreset from '@coxdev/roxine-preset';
import { BrowserRouter as Router } from "react-router-dom";
// import isMobile from 'is-mobile';

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   }, {
//     path: "/about",
//     element: <AboutPage />
//   }
// ])

root.render(
  // <React.StrictMode>
    <Router>
      <ThemeUIProvider theme={roxinePreset}>
        <App />
      </ThemeUIProvider>
    </Router>
  // </React.StrictMode>
);

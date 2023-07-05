import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import AboutPage from "./pages/about/index"
import { ThemeUIProvider } from "theme-ui";
import roxinePreset from '@coxdev/roxine-preset';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import isMobile from 'is-mobile';

const root = ReactDOM.createRoot(document.getElementById("root"));
const router =createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }, {
    path: "/about",
    element: <AboutPage/>
  }
])

root.render(
  <ThemeUIProvider theme={roxinePreset}>
    <RouterProvider router={router}/>
  </ThemeUIProvider>
);

/** @jsxImportSource theme-ui */
import "./App.css";
import Layout from "../components/layout/layout";

import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/my-site" element={<HomePage/>} />
          <Route path="/my-site/about" element={<AboutPage/>} />
        </Routes>
      </Layout>
  );
}

export default App;

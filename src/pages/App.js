/** @jsxImportSource theme-ui */
import "./App.css";
import Layout from "../components/layout/layout";

import { Route, Routes } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import TeamPage from './team';

function App() {
  return (
    <Layout>
      <Routes >
        <Route path="/my-site/*">
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;

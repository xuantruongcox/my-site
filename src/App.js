/** @jsxImportSource theme-ui */
import "./App.css";
import Layout from "./components/layout/layout";
import Caption from "./components/caption/caption";
import Categories from "./components/categories/categories";
import Quote from "./components/quote/quote";
import Galleries from "./components/galleries/galleries";
import Story from "./components/story/story";
import Culture from "./components/culture/culture";
import Team from "./components/team/team";
import Analysis from "./components/analysis/analysis";
import Testimonials from './components/testimonials/testimonials-slider';
import { Suspense } from "react";
import caption from "./components/caption/dum-data";
import categories from "./components/categories/dum-data";
import quotation from "./components/quote/dum-data";
import galleries from "./components/galleries/dum-data";
import story from "./components/story/dum-data";
import culture from "./components/culture/dum-data";
import team from "./components/team/dum-data";

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Layout>
        <Caption data={caption} />
        <Categories data={categories} />
        <Quote quote={quotation} />
        <Galleries data={galleries} />
        <Story data={story} />
        <Culture data={culture} />
        <Team data={team} />
        <Analysis />
        <Testimonials />
      </Layout>
    </Suspense>
  );
}

export default App;

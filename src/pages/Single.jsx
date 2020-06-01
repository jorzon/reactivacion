import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import { HeroSingle } from "components/general/hero/hero.stories.js";
import Sidebar from "components/single/sidebar/Sidebar";
import Notas from "components/single/notas/Notas";

const Single = () => {
  return (
    <Layout>
      <Seo
        title=""
        desc=""
        canonical=""
        ogTitle=""
        ogDesc=""
        ogUrl=""
        ogImage=""
        hashTag=""
      />
      <Sidebar/>
      <HeroSingle />
      <Notas/>
    </Layout>
  );
};

export default Single;

import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import { HeroHome } from "components/general/hero/hero.stories.js";
import Medidas from "components/home/medidas/Medidas";

const Home = () => {
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
      <HeroHome />
      <Medidas />
    </Layout>
  );
};

export default Home;

import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import { HeroHome } from "components/general/hero/hero.stories.js";
import Medidas from "components/home/medidas/Medidas";
import Notas from "components/home/notas/Notas";

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
      <Notas/>
    </Layout>
  );
};

export default Home;

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
        title="Reactivación	del	turismo	en	Perú | Y	tú	qué	planes?"
        desc="Muy	 pronto	 volveremos	 a	 viajar	 por	 el	 Perú	 y	 disfrutar	 de	 sus	 mejores	
        lugares	turísticos.	Nos	estamos	preparando	para	darte	la	mejor	experiencia	en	turismo	
        interno"
        canonical=""
        robots="index, follow"
        ogTitle="Reactivación	del	turismo	en	Perú | Y	tú	qué	planes?"
        ogDesc="Muy	 pronto	 volveremos	 a	 viajar	 por	 el	 Perú	 y	 disfrutar	 de	 sus	 mejores	
        lugares	turísticos.	Nos	estamos	preparando	para	darte	la	mejor	experiencia	en	turismo	
        interno"
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

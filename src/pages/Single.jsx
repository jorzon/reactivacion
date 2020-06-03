import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import MainContent from "components/single/main-content/MainContent";
import Notas from "components/single/notas/Notas";
import { Route } from "react-router-dom";
import data from "data/notas.json";
import img from 'assets/img/slider.jpg'

const Single = () => {
  return (
    <Layout>
      {data.map((post) => (
        <Route key={post.id} path={"/" + post.slug}>
          <Seo
            title={post.titulo}
            desc=""
            canonical=""
            ogTitle=""
            ogDesc=""
            ogUrl=""
            ogImage=""
            hashTag=""
          />
          <MainContent 
            title={post.titulo}
            banner={post.imagen}
            date={post.date}
            slug={post.slug}
            category={post.categoria}
          />
        </Route>
      ))}
      <Notas />
    </Layout>
  );
};

export default Single;

import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import MainContent from "components/single/main-content/MainContent";
import Notas from "components/single/notas/Notas";
import { Route } from "react-router-dom";
import data from "data/notas.json";

const Single = () => {
  return (
    <Layout single to="/" content="inicio">
      {data.map((post) => (
        <Route key={post.id} path={"/notas" + post.slug}>
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
            content={post.texto.map((parrafo) => parrafo)}
            content2={post.texto2.map((parrafo) => parrafo)}
            subtitle={post.subtitle}
            shortname={post.shortname}
            notes={data}
            pagination={data}
            previous={post.id - 1}
            next={post.id + 1}
          />
        </Route>
      ))}
      <Notas />
    </Layout>
  );
};

export default Single;

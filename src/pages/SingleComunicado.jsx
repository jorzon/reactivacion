import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import MainContentComunicados from "components/single/main-content/MainContentComunicados";
import Notas from "components/single/notas/Notas";
import { Route } from "react-router-dom";
import data from "data/medidas.json";

const SingleComunicado = () => {
  return (
    <Layout single to="/ver-todo" content="comunicados">
      {data.map(post => (
        <Route key={post.id} path={"/comunicados" + post.slug}>
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
          {post.id == 1 ? (
            <MainContentComunicados
              title={post.titulo}
              banner={post.imagen}
              banner2={post.imagenInfo}
              shortname={post.shortname}
              parrafo={post.resumen}
              url={post.url}
              slug={post.slug}
              pagination={data}
              previous={post.id - 1}
              next={post.id + 1}
              greenbtn
            />
          ) : (
            <MainContentComunicados
              title={post.titulo}
              banner={post.imagen}
              banner2={post.imagenInfo}
              shortname={post.shortname}
              parrafo={post.resumen}
              url={post.url}
              slug={post.slug}
              pagination={data}
              previous={post.id - 1}
              next={post.id + 1}
            />
          )}
        </Route>
      ))}
      <Notas />
    </Layout>
  );
};

export default SingleComunicado;

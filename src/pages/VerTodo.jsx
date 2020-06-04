import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import Head from "components/ver-todo/head/Head";
import MainContent from "components/ver-todo/main-content/MainContent";

const VerTodo = () => {
  return (
    <Layout single to="/" content="inicio">
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
      <Head/>
      <MainContent/>
    </Layout>
  );
};

export default VerTodo;

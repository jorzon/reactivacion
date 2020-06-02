import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import MainContent from "components/single/main-content/MainContent";
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
      <MainContent />
      <Notas/>
    </Layout>
  );
};

export default Single;

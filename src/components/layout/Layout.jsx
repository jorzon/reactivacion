import React from "react";
import Header from "components/header/Header";
import { HeaderSingle } from "components/header/header.stories.js";
import Footer from "components/footer/Footer";

const Layout = ({ children, single, to, content }) => {
  return (
    <main role="main">
      {single ? <HeaderSingle to={to} content={content} /> : <Header />}
      {children}
      <Footer />
    </main>
  );
};

Layout.defaultProps = {
  children: "",
};

export default Layout;

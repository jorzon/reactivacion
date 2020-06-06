import React from "react";
import styles from "./breadcrumbs.module.scss";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ content, slug, tipo }) => {
  return (
    <div className={styles.wrapper}>
      <Link to={"/"}>
        Home > &nbsp;
      </Link>
      <Link to={"/ver-todo"}>
        Ver todo >&nbsp;
      </Link>
      <Link to={"/" + slug} className={styles.active}>
        {content}
      </Link>
    </div>
  );
};

Breadcrumbs.defaultProps = {
  content: "Nombre de la nota",
  slug: "single"
};

export default Breadcrumbs;

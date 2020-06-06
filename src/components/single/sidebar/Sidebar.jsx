import React from "react";
import styles from "./sidebar.module.scss";
import Text from "components/general/text/Text";
import { Link } from "react-router-dom";

const Sidebar = ({ notes }) => {
  const checkNotes = (x) => x.categoria.includes("Nota");
  const checkInfo = (x) => x.categoria.includes("Infografía");

  return (
    <aside className={styles.wrapper}>
      <div className={styles.content}>
        <Text className={styles.heading} content="Más notas" />
        {notes
          .filter(checkNotes)
          .slice(0, 3)
          .map((post) => (
            <Link key={post.id} to={"/notas" + post.slug} className={styles.note}>
              <Text className={styles.title} content={post.titulo} />
              <Text className={styles.date} content={post.date} />
              <hr className={styles.hr} />
            </Link>
          ))}
      </div>
      <div className={styles.content}>
        <Text className={styles.heading} content="Infografías" />
        {notes
          .filter(checkInfo)
          .slice(0, 3)
          .map((post) => (
            <Link key={post.id} to={"/notas" + post.slug} className={styles.note}>
              <Text className={styles.title} content={post.titulo} />
              <Text className={styles.date} content={post.date} />
              <hr className={styles.hr} />
            </Link>
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;

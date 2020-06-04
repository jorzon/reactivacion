import React from "react";
import styles from "./sidebar.module.scss";
import Text from "components/general/text/Text";

const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.content}>
        <Text className={styles.heading} content="Más notas" />
        <div className={styles.note}>
          <Text
            className={styles.title}
            content="Te invitamos a conocer un poco más sobre el Perú"
          />
          <Text className={styles.date} content="13 de mayo, 2020" />
          <hr className={styles.hr} />
        </div>
        <div className={styles.note}>
          <Text
            className={styles.title}
            content="Te invitamos a conocer un poco más sobre el Perú"
          />
          <Text className={styles.date} content="13 de mayo, 2020" />
          <hr className={styles.hr} />
        </div>
        <div className={styles.note}>
          <Text
            className={styles.title}
            content="Te invitamos a conocer un poco más sobre el Perú"
          />
          <Text className={styles.date} content="13 de mayo, 2020" />
          <hr className={styles.hr} />
        </div>
      </div>
      <div className={styles.content}>
        <Text className={styles.heading} content="Infografías" />
        <div className={styles.note}>
          <Text
            className={styles.title}
            content="Te invitamos a conocer un poco más sobre el Perú"
          />
          <Text className={styles.date} content="13 de mayo, 2020" />
          <hr className={styles.hr} />
        </div>
        <div className={styles.note}>
          <Text
            className={styles.title}
            content="Te invitamos a conocer un poco más sobre el Perú"
          />
          <Text className={styles.date} content="13 de mayo, 2020" />
          <hr className={styles.hr} />
        </div>
        <div className={styles.note}>
          <Text
            className={styles.title}
            content="Te invitamos a conocer un poco más sobre el Perú"
          />
          <Text className={styles.date} content="13 de mayo, 2020" />
          <hr className={styles.hr} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

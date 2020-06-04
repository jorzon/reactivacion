import React from "react";
import styles from "./pagination.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Text from "components/general/text/Text";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.left}>
        <button className={styles.arrow_left}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div>
          <Text
            className={styles.pag_title}
            content="Ut enim ad minima veniam…"
          />
          <Text className={styles.pag_subtitle} content="Anterior nota" />
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <Text
            className={styles.pag_title}
            content="Ut enim ad minima veniam…"
          />
          <Text className={styles.pag_subtitle} content="Siguiente nota" />
        </div>
        <button className={styles.arrow_right}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

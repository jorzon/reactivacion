import React, { Fragment } from "react";
import styles from "./pagination.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Text from "components/general/text/Text";
import { Link } from "react-router-dom";

const Pagination = ({ pagination, previous, next, tipo, comunicado }) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.left}>
        {pagination.map((post) =>
          post.id === previous ? (
            <Link className={styles.link} key={post.id} to={tipo + post.slug}>
              <button className={styles.arrow_left}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div>
                <Text className={styles.pag_title} content={post.shortname} />
                <Text
                  className={styles.pag_subtitle}
                  content={comunicado ? `Anterior comunicado` : `Anterior nota`}
                />
              </div>
            </Link>
          ) : (
            ""
          )
        )}
      </div>
      <div className={styles.right}>
        {pagination.map((post) =>
          post.id === next ? (
            <Link className={styles.link} key={post.id} to={tipo + post.slug}>
              <div>
                <Text className={styles.pag_title} content={post.shortname} />
                <Text
                  className={styles.pag_subtitle}
                  content={comunicado ? `Anterior comunicado` : `Anterior nota`}
                />
              </div>
              <button className={styles.arrow_right}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;

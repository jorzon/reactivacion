import React, { Fragment } from "react";
import styles from "./main-content.module.scss";
import Text from "components/general/text/Text";
import Breadcrumbs from "components/general/breadcrumbs/Breadcrumbs";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Sidebar from "components/single/sidebar/Sidebar";
import ShareButton from "components/general/share-button/ShareButton";
import { ButtonSingle } from "components/general/button/button.stories.js";
import Pagination from "components/single/pagination/Pagination";

const MainContentComunicados = ({
  title,
  banner,
  shortname,
  slug,
  date,
  parrafo,
  url,
  pagination,
  previous,
  next,
}) => {
  return (
    <LimitWrapper>
      <section className={styles.wrapper}>
        {/* <Sidebar notes={notes} /> */}
        <div className={styles.content}>
          <img className={styles.img} src={banner} alt="" />
          <Breadcrumbs comunicado content={shortname} slug={"comunicados" + slug} />
          <Text className={styles.title} content={title} />
          <Text className={styles.date} content={date} />
          <Text className={styles.text} content={parrafo} />
          <a
            className={styles.download}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Ver comunicado completo
          </a>
          <hr className={styles.hr} />
          <Pagination comunicado tipo="/comunicados" pagination={pagination} previous={previous} next={next}/>
        </div>
      </section>
    </LimitWrapper>
  );
};

export default MainContentComunicados;

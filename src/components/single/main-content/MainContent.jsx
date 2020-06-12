import React, { Fragment } from "react";
import styles from "./main-content.module.scss";
import Text from "components/general/text/Text";
import Breadcrumbs from "components/general/breadcrumbs/Breadcrumbs";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Sidebar from "components/single/sidebar/Sidebar";
import ShareButton from "components/general/share-button/ShareButton";
import { ButtonSingle } from "components/general/button/button.stories.js";
import Pagination from "components/single/pagination/Pagination";
import Paragraph from "components/general/paragraph/Paragraph";

const MainContent = ({
  banner,
  title,
  slug,
  date,
  category,
  content,
  content2,
  subtitle,
  shortname,
  notes,
  pagination,
  previous,
  next,
  tipo,
}) => {
  return (
    <LimitWrapper>
      <section className={styles.wrapper}>
        <Sidebar notes={notes} />
        <div className={styles.content}>
          <img className={styles.img} src={banner} alt="" />
          <Breadcrumbs content={shortname} slug={"notas" + slug} />
          <Text className={styles.title} content={title} />
          <Text className={styles.date} content={date} />
          <Paragraph source={content}/>

          {/* 
          key={post.id}
          <div className={styles.tags}>
            <div className={styles.button}>
              <ButtonSingle yellow content="Nuevo" />
              <ButtonSingle pink content={category} />
            </div>
            <ShareButton />
          </div> */}
          <hr className={styles.hr} />
          <Pagination
            tipo="/notas"
            pagination={pagination}
            previous={previous}
            next={next}
          />
        </div>
      </section>
    </LimitWrapper>
  );
};

export default MainContent;

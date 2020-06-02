import React from "react";
import styles from "./main-content.module.scss";
import img from "assets/img/slider.jpg";
import Text from "components/general/text/Text";
import Breadcrumbs from "components/general/breadcrumbs/Breadcrumbs";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Sidebar from "components/single/sidebar/Sidebar";
import ShareButton from "components/general/share-button/ShareButton";
import { ButtonSingle } from "components/general/button/button.stories.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MainContent = () => {
  return (
    <LimitWrapper>
      <section className={styles.wrapper}>
        <Sidebar />
        <div className={styles.content}>
          <img className={styles.img} src={img} alt="" />
          <Breadcrumbs/>
          <Text
            className={styles.title}
            content="Te invitamos a conocer un poco más sobre el Perú"
          />
          <Text className={styles.date} content="13 de mayo, 2020" />
          <Text
            className={styles.text}
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volu suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptn ea.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          />
          <div className={styles.tags}>
            <div className={styles.button}>
              <ButtonSingle yellow content="Nuevo" />
              <ButtonSingle pink content="Nota" />
            </div>
            <ShareButton />
          </div>
          <hr className={styles.hr} />
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
                <Text className={styles.pag_subtitle} content="Anterior nota" />
              </div>
              <button className={styles.arrow_right}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </LimitWrapper>
  );
};

export default MainContent;

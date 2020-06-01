import React from "react";
import styles from "./notas.module.scss";
import Text from "components/general/text/Text";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import { CardMedidasSm } from "components/general/card/card.stories.js";

const Notas = () => {
  return (
    <section className={styles.wrapper}>
      <LimitWrapper>
        <Text className={styles.title} content="Te puede interesar" />
        <div className={styles.cards}>
            <CardMedidasSm/>
            <CardMedidasSm/>
            <CardMedidasSm/>
            <CardMedidasSm/>
        </div>
      </LimitWrapper>
    </section>
  );
};

export default Notas;

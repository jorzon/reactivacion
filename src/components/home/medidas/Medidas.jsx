import React from "react";
import styles from "./medidas.module.scss";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";

const Medidas = () => {
  return (
    <section className={styles.wrapper}>
      <LimitWrapper>
        Conoce las nuevas medidas que de están implementando para cuando
        volcamos a viajar
      </LimitWrapper>
    </section>
  );
};

export default Medidas;

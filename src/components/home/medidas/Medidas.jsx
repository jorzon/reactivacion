import React from "react";
import styles from "./medidas.module.scss";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Text from "components/general/text/Text";
import {
  CardMedidasSm,
  CardMedidasLg,
} from "components/general/card/card.stories.js";
import { ButtonHomeMedidas } from "components/general/button/button.stories.js";
import data from "data/medidas.json";

const Medidas = () => {
  return (
    <section className={styles.wrapper}>
      <LimitWrapper>
        <Text
          className={styles.title}
          content="Conoce las nuevas medidas que se están implementando para cuando
        volvamos a viajar"
        />
        <div className={styles.card_container}>
          {data.map((post) =>
            post.categoria === "Turismo" ? (
              <CardMedidasSm
                key={post.id}
                title={post.titulo}
                date={post.fecha}
                category={post.categoria}
                slug={post.slug}
                alt={post.alt}
                image={post.imagen}
              />
            ) : (
              <CardMedidasLg
                key={post.id}
                title={post.titulo}
                date={post.fecha}
                category={post.categoria}
                slug={post.slug}
                alt={post.alt}
                image={post.imagen}
              />
            )
          )}
        </div>
        <ButtonHomeMedidas />
      </LimitWrapper>
    </section>
  );
};

export default Medidas;

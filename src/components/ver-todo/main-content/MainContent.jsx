import React, { useState } from "react";
import styles from "./main-content.module.scss";
import Text from "components/general/text/Text";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import {
  CardMedidasSm,
  CardMedidasLg,
} from "components/general/card/card.stories.js";
import data from "data/medidas.json";

const Head = () => {
  const [numberOfItems, setNumberOfItems] = useState(5);
  const [hideButton, setHideButton] = useState(false);

  const handleShowMore = () => {
    numberOfItems < 15 ? setNumberOfItems(numberOfItems + 5) : "";
    numberOfItems >= 10 ? setHideButton(true) : "";
  };

  return (
    <LimitWrapper>
      <div className={styles.wrapper}>
        <Text
          className={styles.title}
          content="Conoce las nuevas medidas que se están implementando para cuando volvamos a viajar"
        />
      </div>
      <div className={styles.wrapper_cards}>
        {data
          .slice(0, numberOfItems)
          .map((post) =>
            post.categoria === "Turismo" ? (
              post.id == 1 || post.id == 2 || post.id == 3 ? (
                <CardMedidasSm
                  key={post.id}
                  title={post.card}
                  date={post.fecha}
                  category={post.categoria}
                  slug={"/comunicados" + post.slug}
                  alt={post.alt}
                  image={post.imagen}
                  description={post.titulo}
                  green
                />
              ) : (
                <CardMedidasSm
                  key={post.id}
                  title={post.card}
                  date={post.fecha}
                  category={post.categoria}
                  slug={"/comunicados" + post.slug}
                  alt={post.alt}
                  image={post.imagen}
                  description={post.titulo}
                />
              )
            ) : post.id == 1 || post.id == 2 || post.id == 3 ? (
              <CardMedidasLg
                key={post.id}
                title={post.card}
                date={post.fecha}
                category={post.categoria}
                slug={"/comunicados" + post.slug}
                alt={post.alt}
                image={post.imagen}
                description={post.titulo}
                green
              />
            ) : (
              <CardMedidasLg
                key={post.id}
                title={post.card}
                date={post.fecha}
                category={post.categoria}
                slug={"/comunicados" + post.slug}
                alt={post.alt}
                image={post.imagen}
                description={post.titulo}
              />
            )
          )}
      </div>
      {!hideButton && (
        <button className={styles.button_show} onClick={handleShowMore}>
          Ver más
        </button>
      )}
    </LimitWrapper>
  );
};

export default Head;

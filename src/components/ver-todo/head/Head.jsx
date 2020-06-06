import React, { useState } from "react";
import styles from "./head.module.scss";
import Text from "components/general/text/Text";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import { ButtonFilter } from "components/general/button/button.stories.js";
import {
  CardMedidasSm,
  CardMedidasLg,
} from "components/general/card/card.stories.js";
import data from "data/medidas.json";
import data2 from "data/notas.json";

const Head = () => {
  const [numberOfItems, setNumberOfItems] = useState(5);
  const [hideButton, setHideButton] = useState(false);

  const handleShowMore = () => {
    numberOfItems < 15 ? setNumberOfItems(numberOfItems + 5) : "";
    numberOfItems >= 10 ? setHideButton(true) : "";
  };

  const [filterNotas, setFilterNotas] = useState(true);
  const [filterInfo, setFilterInfo] = useState(false);

  const handleFilterNotas = () => {
    setFilterNotas(true);
    setFilterInfo(false);
  };

  const handleFilterInfo = () => {
    setFilterNotas(false);
    setFilterInfo(true);
  };
  return (
    <LimitWrapper>
      <div className={styles.wrapper}>
        <Text
          className={styles.title}
          content="Conoce las nuevas medidas que de están implementando para cuando volvamos a viajar"
        />
        <div className={styles.button}>
          <ButtonFilter
            filter1={handleFilterNotas}
            filter2={handleFilterInfo}
          />
        </div>
      </div>
      <div className={filterNotas ? styles.wrapper_cards : styles.wrapper_hide}>
        {data
          .slice(0, numberOfItems)
          .map((post) =>
            post.categoria === "Turismo" ? (
              <CardMedidasSm
                key={post.id}
                title={post.titulo}
                date={post.fecha}
                category={post.categoria}
                slug={"/comunicados" + post.slug}
                alt={post.alt}
                image={post.imagen}
              />
            ) : (
              <CardMedidasLg
                key={post.id}
                title={post.titulo}
                date={post.fecha}
                category={post.categoria}
                slug={"/comunicados" + post.slug}
                alt={post.alt}
                image={post.imagen}
              />
            )
          )}
      </div>
      <div className={filterInfo ? styles.wrapper_cards : styles.wrapper_hide}>
        {data2
          .slice(0, numberOfItems)
          .map((post) =>
            post.categoria === "Nota" ? (
              <CardMedidasSm
                notaVerTodo
                key={post.id}
                title={post.titulo}
                date={post.fecha}
                category={post.categoria}
                slug={"/notas" + post.slug}
                alt={post.alt}
                image={post.imagen}
              />
            ) : (
              <CardMedidasLg
                notaVerTodo
                key={post.id}
                title={post.titulo}
                date={post.fecha}
                category={post.categoria}
                slug={"/notas" + post.slug}
                alt={post.alt}
                image={post.imagen}
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

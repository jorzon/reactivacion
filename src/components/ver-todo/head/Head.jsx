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

const Head = ({ notasActive }) => {
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
          content="Conoce las nuevas medidas que de están implementando para cuando volcamos a viajar"
        />
        <div className={styles.button}>
          <ButtonFilter
            filter1={handleFilterNotas}
            filter2={handleFilterInfo}
          />
        </div>
      </div>
      <div className={filterNotas ? styles.wrapper_cards : styles.wrapper_hide}>
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
      <div className={filterInfo ? styles.wrapper_cards : styles.wrapper_hide}>
        {data2.map((post) =>
          post.categoria === "Nota" ? (
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
    </LimitWrapper>
  );
};

export default Head;

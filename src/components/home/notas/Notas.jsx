import React from "react";
import styles from "./notas.module.scss";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Text from "components/general/text/Text";
import {
  CardNotasSm,
  CardNotasLg,
} from "components/general/card/card.stories.js";
import data from "data/notas.json";

const Notas = () => {
  return (
    <section className={styles.wrapper}>
      <Text className={styles.title} content="#YoMeQuedoEnCasa" />
      <Text
        className={styles.subtitle}
        content="Dale un vistazo a estos contenidos desde la comodidad de tu hogar. Un viaje
          por el Perú haciendo solo un click"
      />
      <div className={styles.card_container}>
        {data.map((post) =>
          post.categoria === "imagen" ? (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug={post.slug}
              alt={post.alt}
              picture
            />
          ) : post.categoria === "video" ? (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug={post.slug}
              alt={post.alt}
              video
            />
          ) : (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug={post.slug}
              alt={post.alt}
            />
          )
        )}
        {/* <CardNotasLg picture />
        <CardNotasSm video />
        <CardNotasSm picture />
        <CardNotasSm />
        <CardNotasSm video />
        <CardNotasLg /> */}
      </div>
    </section>
  );
};

export default Notas;

import React from "react";
import styles from "./notas.module.scss";
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
          post.id == 1 || post.id == 6 ? (
            post.categoria === "imagen" ? (
              <CardNotasLg
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug="/single"
                alt={post.alt}
                picture
              />
            ) : post.categoria === "video" ? (
              <CardNotasLg
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug="/single"
                alt={post.alt}
                video
              />
            ) : (
              <CardNotasLg
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug="/single"
                alt={post.alt}
              />
            )
          ) : post.categoria === "imagen" ? (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug="/single"
              alt={post.alt}
              picture
            />
          ) : post.categoria === "video" ? (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug="/single"
              alt={post.alt}
              video
            />
          ) : (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug="/single"
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

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
            post.categoria === "info" ? (
              <CardNotasLg
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug="/single"
                alt={post.alt}
                image={post.imagen}
                content="Ver infografia"
              />
            ) : (
              <CardNotasLg
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug="/single"
                alt={post.alt}
                image={post.imagen}
                content="Ver Nota"
              />
            )
          ) : post.categoria === "info" ? (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug="/single"
              alt={post.alt}
              image={post.imagen}
              content="Ver infografia"
            />
          ) : (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug="/single"
              alt={post.alt}
              image={post.imagen}
              content="Ver Nota"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Notas;

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
        {data.slice(0, 6).map((post) =>
          post.id == 1 || post.id == 6 ? (
            post.categoria === "Infografía" ? (
              <CardNotasLg
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug={"/notas" + post.slug}
                alt={post.alt}
                image={post.imagen}
                content="Ver infografía" 
              />
            ) : (
              <CardNotasLg
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug={"/notas" + post.slug}
                alt={post.alt}
                image={post.imagen}
                content="Ver nota"
              />
            )
          ) : post.categoria === "Infografía" ? (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug={"/notas" + post.slug}
              alt={post.alt}
              image={post.imagen}
              content="Ver infografía"
            />
          ) : (
            <CardNotasSm
              key={post.id}
              title={post.titulo}
              category={post.categoria}
              slug={"/notas" + post.slug}
              alt={post.alt}
              image={post.imagen}
              content="Ver nota"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Notas;

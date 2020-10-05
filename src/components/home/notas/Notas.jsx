import React from "react";
import styles from "./notas.module.scss";
import Text from "components/general/text/Text";
import {
  CardNotasSm,
  CardNotasLg,
  CardNotasLgAnchor
} from "components/general/card/card.stories.js";
import data from "data/notas.json";

const Notas = () => {
  return (
    <section className={styles.wrapper}>
      <Text className={styles.title} content="#PrimeroMiSalud #VamosAVolver" />
      <Text
        className={styles.subtitle}
        headingLevel="h2"
        content="Dale	un vistazo a estos contenidos	desde	la	
        comodidad	de tu	hogar. Viaja por el Perú y descubre	sus	lugares	turísticos con un	
        solo clic"
      />

      <div className={styles.card_container}>
        <CardNotasLg
          title="Yo me protejo usando mi mochila de emergencia"
          category="Nota"
          slug="/notas/yo-me-protejo-usando-mi-mochila-de-emergencia"
          alt="mochila-de-emergencia"
          image="./src/assets/img/nota15/mochila-de-emergencia.jpg"
          content="Ver nota"
        />

        <CardNotasSm
          title="Cuidar tu salud es simple, incluye la granadilla en tu alimentación"
          category="Nota"
          slug="/notas/incluye-la-granadilla-en-tu-alimentacion"
          alt="rutas-cortas"
          image="./src/assets/img/nota4/granadillas-plato.jpg"
          content="Ver nota"
        />
        <CardNotasSm
          title="#PrimeroMiSalud, me cuido hoy para viajar después"
          category="Nota"
          slug="/notas/me-cuido-hoy-para-viajar-despues"
          alt="operadores-de-viaje"
          image="./src/assets/img/nota8/limpieza-de-manos.jpg"
          content="Ver nota"
        />
        <CardNotasSm
          title="Viajar por el Perú: otra forma de ayudar a tu país"
          category="Nota"
          slug="/notas/viajar-por-el-peru"
          alt="superalimento-andino"
          image="./src/assets/img/nota9/viaje_maleta.png"
          content="Ver nota"
        />
        <CardNotasSm
          title="¡A calentar el cuerpo con una patasca!"
          category="Nota"
          slug="/notas/a-calentar-el-cuerpo"
          alt="momentos-en-familia"
          image="./src/assets/img/nota5/patasca-peru.jpg"
          content="Ver nota"
        />
        <CardNotasLgAnchor
          anchor
          title="Estas son las Rutas Cortas del Perú que podrás disfrutar pronto"
          category=""
          slug="https://www.ytuqueplanes.com/rutas-cortas"
          alt="rutas-cortas"
          image="./src/assets/img/rupac-lima.jpg"
          content="Elige tu ruta"
        />
      </div>
    </section>
  );
};

export default Notas;

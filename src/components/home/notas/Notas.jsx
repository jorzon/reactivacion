import React from "react";
import styles from "./notas.module.scss";
import Text from "components/general/text/Text";
import {
  CardNotasSm,
  CardNotasLg,
  CardNotasLgAnchor,
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
        solo click"
      />
      <div className={styles.card_container}>
        <CardNotasLg
          anchor
          title="Ejercicio y comida saludable: el secreto para estar listo antes del viaje"
          category="Nota"
          slug="/notas/ejercicio-y-comida-saludable"
          alt="rutas-cortas"
          image="http://mmsolutions.com.pe/img/landing-reactivacion/nota1/mujer-saludable-card.jpg"
          content="Ver nota"
        />
        <CardNotasSm
          title="Un viaje virtual con tus lentes de realidad virtual hechos en casa"
          category="Nota"
          slug="/notas/un-viaje-virtual-con-tus-lentes-de-realidad-virtual"
          alt="vista-aerea-kuelap"
          image="http://mmsolutions.com.pe/img/landing-reactivacion/nota2/montanas-kuelap.jpg"
          content="Ver nota"
        />
        <CardNotasSm
          title="Agencias de viaje listas para sacar a flote al turismo interno"
          category="Nota"
          slug="/notas/agencias-de-viaje-listas"
          alt="operadores-de-viaje"
          image="http://mmsolutions.com.pe/img/landing-reactivacion/nota3/agencia-de-viajes.jpg"
          content="Ver nota"
        />
        <CardNotasSm
          title="Quinua, superalimento andino que nutre al mundo"
          category="Nota"
          slug="/notas/quinua-superalimento-andino"
          alt="superalimento-andino"
          image="http://mmsolutions.com.pe/img/landing-reactivacion/nota6/quinua-en-mano.jpg"
          content="Ver nota"
        />
        <CardNotasSm
          title="¡Como si estuvieras allí! Viaja a Ica y Callao sin salir de casa!"
          category="Nota"
          slug="/notas/viaja-a-ica-y-callao"
          alt="momentos-en-familia"
          image="http://mmsolutions.com.pe/img/landing-reactivacion/nota5/familia-pelicula.jpg"
          content="Ver nota"
        />
        <CardNotasLgAnchor
          anchor
          title="Estas son las Rutas Cortas del Perú que podrás disfrutar pronto"
          category=""
          slug="https://www.ytuqueplanes.com/rutas-cortas"
          alt="rutas-cortas"
          image="http://mmsolutions.com.pe/img/landing-reactivacion/rupac-lima.jpg"
          content="Elige tu ruta"
        />
      </div>
    </section>
  );
};

export default Notas;

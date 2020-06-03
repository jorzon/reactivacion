import React from "react";
import styles from "./footer.module.scss";
import {
  faFacebookF,
  faWhatsapp,
  faTwitter,
  faInstagram,
  faYoutube,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iperu from "assets/img/iperu.webp";
import promperu from "assets/img/promperu.webp";
import marcaperu from "assets/img/perumarca.webp";
import Text from "components/general/text/Text";
import { ButtonFooter } from "components/general/button/button.stories.js";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <LimitWrapper>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <Text
              className={styles.title}
              content="Información para tu viaje"
            />
            <ul className={styles.ul}>
              <li className={styles.li}>Lista de Feriados 2019</li>
              <li className={styles.li}>Clima y Pronóstico del Tiempo</li>
              <li className={styles.li}>Áreas Naturales Protegidas</li>
            </ul>
          </div>
          <div className={styles.content}>
            <div>
              <Text
                className={styles.title}
                content="Asistencia al viajero 24 horas"
              />
              <ButtonFooter icon={faWhatsapp} green content="944492314" />
            </div>
            <div className={styles.content_contact}>
              <Text
                className={styles.title}
                content="Recibe nuevas ofertas y novedades"
              />
              <ButtonFooter pink content="Suscribirme" />
            </div>
          </div>
          <div className={styles.content}>
            <Text className={styles.title} content="Síguenos" />
            <div className={styles.social}>
              <button className={styles.icon_fb}>
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button className={styles.icon_twi}>
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className={styles.icon_ig}>
                <FontAwesomeIcon icon={faInstagram} />
              </button>
              <button className={styles.icon_yt}>
                <FontAwesomeIcon icon={faYoutube} />
              </button>
              <button className={styles.icon_spo}>
                <FontAwesomeIcon icon={faSpotify} />
              </button>
            </div>
            <div className={styles.partner}>
              <img className={styles.img_partner} src={iperu} alt="" />
              <img className={styles.img_partner} src={promperu} alt="" />
              <img className={styles.img_partner} src={marcaperu} alt="" />
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.subfooter}>
          <div className={styles.subfooter_link}>Mapa de sitio</div>
          <div className={styles.subfooter_link}>Aviso legal</div>
          <div className={styles.subfooter_link}>Términos y Condiciones</div>
          <div className={styles.subfooter_link}>
            Todos los derechos reservados,{" "}
            <span className={styles.subfooter_span}>ytuqueplanes 2020</span>
          </div>
        </div>
      </LimitWrapper>
    </footer>
  );
};

export default Footer;

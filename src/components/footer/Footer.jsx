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
import { ButtonFooterSubscribe } from "components/general/button/button.stories.js";
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
            
          </div>
          <div className={styles.content}>
            <Text
              className={styles.title}
              content="Síguenos"
            />
          </div>
        </div>
      </LimitWrapper>
    </footer>
  );
};

export default Footer;

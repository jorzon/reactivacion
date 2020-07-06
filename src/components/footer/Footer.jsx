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
import iperu from "assets/img/iperu.png";
import promperu from "assets/img/promperu.png";
import marcaperu from "assets/img/perumarca.png";
import mincetur from "assets/img/mincetur.png";
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
              <li className={styles.li}>
                <a
                  href="https://www.ytuqueplanes.com/pdf/feriados_2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lista de Feriados {new Date().getFullYear()}
                </a>
              </li>
              <li className={styles.li}>
                <a
                  href="https://www.senamhi.gob.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clima y Pronóstico del Tiempo
                </a>
              </li>
              <li className={styles.li}>
                <a
                  href="https://www.sernanp.gob.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Áreas Naturales Protegidas
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <div>
              <Text
                className={styles.title}
                content="Asistencia al viajero 24 horas"
              />
              <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between", maxWidth: 305, minWidth: 308}}>
                <ButtonFooter
                  wsp
                  url="https://api.whatsapp.com/send?phone=051944492314&text=&source=&data=&app_absent="
                  icon={faWhatsapp}
                  green
                  content="944492314"
                />
                <img className={styles.img_partner_wsp} src={iperu} alt="" />
              </div>
            </div>
            <div className={styles.content_contact}>
              <Text
                className={styles.title}
                content="Recibe nuevas ofertas y novedades"
              />
              <ButtonFooter
                url="https://ytuqueplanes.com/suscribete.aspx"
                pink
                content="Suscribirme"
              />
            </div>
          </div>
          <div className={styles.content}>
            <Text className={styles.title} content="Síguenos" />
            <div className={styles.social}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/pages/Visit-Peru/524042817717056"
                className={styles.icon_fb}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/conoceelperu"
                className={styles.icon_twi}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/ytuqueplanes/ "
                className={styles.icon_ig}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.youtube.com/visitperu"
                className={styles.icon_yt}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/user/yt%C3%BAqu%C3%A9planes/playlist/7pTRlBhxN2YhkEqtwu0T4k "
                className={styles.icon_spo}
              >
                <FontAwesomeIcon icon={faSpotify} />
              </a>
            </div>
            <div className={styles.partner}>
              <img className={styles.img_partner} src={promperu} alt="" />
              <img className={styles.img_partner} src={mincetur} alt="" />
              <div className={styles.separator}></div>
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

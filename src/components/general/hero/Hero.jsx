import React, { Fragment } from "react";
import styles from "./hero.module.scss";

const Hero = ({ className, image, alt, children, video, home }) => {
  return (
    <section className={className}>
      {children}
      {home ? (
        <Fragment>
          <img className={styles.img_home} src={image} alt={alt} />
          <video autoPlay muted loop className={styles.video} src={video}></video>
        </Fragment>
      ) : (
        <img className={styles.img} src={image} alt={alt} />
      )}
    </section>
  );
};

Hero.defaultProps = {
  className: "",
  image: "",
  alt: "",
  children: "",
  video: "",
  home: false
};

export default Hero;

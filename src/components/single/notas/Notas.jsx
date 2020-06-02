import React from "react";
import styles from "./notas.module.scss";
import Text from "components/general/text/Text";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import { CardMedidasSm } from "components/general/card/card.stories.js";
import Slider from "react-slick";

const Notas = () => {
  const settings = {
    responsive: [
      {
        breakpoint: 999999,
        settings: "unslick",
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          variableWidth: true,
          speed: 400,
          infinite: true,
          arrows: false
        },
      },
    ],
  };

  return (
    <section className={styles.wrapper}>
      <LimitWrapper>
        <Text className={styles.title} content="Te puede interesar" />
        <Slider className={styles.cards} {...settings}>
          <CardMedidasSm />
          <CardMedidasSm />
          <CardMedidasSm />
          <CardMedidasSm />
        </Slider>
      </LimitWrapper>
    </section>
  );
};

export default Notas;

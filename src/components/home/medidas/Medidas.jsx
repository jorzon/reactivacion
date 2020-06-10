import React, { useState, useEffect } from "react";
import styles from "./medidas.module.scss";
import axios from "axios";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Text from "components/general/text/Text";
import Paragraph from "components/general/paragraph/Paragraph";
import {
  CardMedidasSm,
  CardMedidasLg,
} from "components/general/card/card.stories.js";
import { ButtonHomeMedidas } from "components/general/button/button.stories.js";
import data2 from "data/medidas.json";
import Slider from "react-slick";

const Medidas = () => {
  const settings = {
    responsive: [
      {
        breakpoint: 999999,
        settings: "unslick",
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          variableWidth: true,
          speed: 400,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:1337/notas");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <section className={styles.wrapper}>
      <LimitWrapper>
        {/* {data.map((post) => (
          <Paragraph source={post.Parrafo} />
        ))} */}
        <Text
          className={styles.title}
          content="Conoce las nuevas medidas que se están implementando para cuando
        volvamos a viajar"
        />
        <Slider className={styles.card_container} {...settings}>
          {data2
            .slice(0, 5)
            .map((post) =>
              post.categoria === "Turismo" ? (
                <CardMedidasSm
                  key={post.id}
                  title={post.titulo}
                  date={post.fecha}
                  category={post.categoria}
                  slug={"/comunicados" + post.slug}
                  alt={post.alt}
                  image={post.imagen}
                />
              ) : (
                <CardMedidasLg
                  key={post.id}
                  title={post.titulo}
                  date={post.fecha}
                  category={post.categoria}
                  slug={"/comunicados" + post.slug}
                  alt={post.alt}
                  image={post.imagen}
                />
              )
            )}
        </Slider>
        <ButtonHomeMedidas />
      </LimitWrapper>
    </section>
  );
};

export default Medidas;

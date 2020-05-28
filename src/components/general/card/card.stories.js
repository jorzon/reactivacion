import React from 'react'
import { withKnobs, text, number } from "@storybook/addon-knobs";
import styles from './card.module.scss'
import Card from './Card';
import Text from "components/general/text/Text";
import { ButtonHomeMedidasCard } from "components/general/button/button.stories.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { ChipMedidas } from "components/general/chip/chip.stories.js";

export default {
    title: 'Card',
    decorators: [withKnobs]
};

export const CardMedidasSm = ({
    slug = text("Slug", "https://www.google.com/"),
    title = text("Titulo", "Norma sanitaria para restaurantes"),
    date = text("Fecha", "13 de mayo, 2020"),
    description = text("Resumen", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…."),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen"),
    category = text("Categoría", "Nuevo")
}) => {

    return (
        <Card to={slug}>
            <div className={styles.wrapper_medidas_sm}>
                <div className={styles.head_medidas_sm}>
                    <ChipMedidas title={category} />
                    <img className={styles.img_medidas} src={image} alt={alt} />
                </div>
                <div className={styles.content_medidas_sm}>
                    <Text className={styles.title_medidas} content={title} />
                    <Text className={styles.date_medidas} content={date} />
                    <Text className={styles.description_medidas} content={description} />
                    <div>
                        <div className={styles.footer_medidas}>
                            <ButtonHomeMedidasCard />
                            <FontAwesomeIcon className={styles.icon_medidas} icon={faShareAlt} />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export const CardMedidasLg = ({
    slug = text("Slug", "https://www.google.com/"),
    title = text("Titulo", "Norma sanitaria para restaurantes"),
    date = text("Fecha", "13 de mayo, 2020"),
    description = text("Resumen", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…."),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen"),
    category = text("Categoría", "Nuevo")
}) => {

    return (
        <Card to={slug}>
            <div className={styles.wrapper_medidas_lg}>
                <div className={styles.head_medidas_lg}>
                    <ChipMedidas title={category} />
                    <img className={styles.img_medidas} src={image} alt={alt} />
                </div>
                <div className={styles.content_medidas_lg}>
                    <Text className={styles.title_medidas} content={title} />
                    <Text className={styles.date_medidas} content={date} />
                    <Text className={styles.description_medidas} content={description} />
                    <div>
                        <div className={styles.footer_medidas}>
                            <ButtonHomeMedidasCard />
                            <FontAwesomeIcon className={styles.icon_medidas} icon={faShareAlt} />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

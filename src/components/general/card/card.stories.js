import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { MemoryRouter } from 'react-router-dom'
import styles from './card.module.scss'
import Card from './Card';
import Text from "components/general/text/Text";
import { ButtonHomeMedidasCard } from "components/general/button/button.stories.js";
import { ChipMedidas } from "components/general/chip/chip.stories.js";
import ShareButton from "components/general/share-button/ShareButton";
import { CategoriaTexto, CategoriaImagen, CategoriaVideo } from "components/home/notas/categoria/categoria.stories.js";

export default {
    title: 'Card',
    decorators: [withKnobs]
};

export const CardMedidasSm = ({
    slug = text("Slug", "/"),
    title = text("Titulo", "Norma sanitaria para restaurantes"),
    date = text("Fecha", "13 de mayo, 2020"),
    description = text("Resumen", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…."),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen"),
    category = text("Categoría", "Nuevo")
}) => {

    return (
        <MemoryRouter>
            <Card anchor to={slug}>
                <div className={styles.wrapper_medidas_sm}>
                    <div className={styles.head_medidas_sm}>
                        <ChipMedidas title={category} />
                        <img className={styles.img_medidas} src={image} alt={alt} />
                    </div>
                    <div className={styles.content_medidas_sm}>
                        <Text className={styles.title_medidas} content={title} />
                        <Text className={styles.date_medidas} content={date} />
                        {/*<Text className={styles.description_medidas} content={description} />*/}
                        <div>
                            <div className={styles.footer_medidas}>
                                <ButtonHomeMedidasCard />
                                <ShareButton />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </MemoryRouter>
    )
}

export const CardMedidasLg = ({
    slug = text("Slug", "/"),
    title = text("Titulo", "Norma sanitaria para restaurantes"),
    date = text("Fecha", "13 de mayo, 2020"),
    description = text("Resumen", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…."),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen"),
    category = text("Categoría", "Nuevo")
}) => {

    return (
        <Card anchor to={slug}>
            <div className={styles.wrapper_medidas_lg}>
                <div className={styles.head_medidas_lg}>
                    <ChipMedidas title={category} />
                    <img className={styles.img_medidas} src={image} alt={alt} />
                </div>
                <div className={styles.content_medidas_lg}>
                    <Text className={styles.title_medidas} content={title} />
                    <Text className={styles.date_medidas} content={date} />
                    {/*<Text className={styles.description_medidas} content={description} />*/}
                    <div>
                        <div className={styles.footer_medidas}>
                            <ButtonHomeMedidasCard />
                            <ShareButton />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export const CardNotasSm = ({
    slug = text("Slug", "/"),
    title = text("Titulo", "Prepárate para mochilear por San Martín"),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen"),
    video = boolean("Es Video", false),
    picture = boolean("Es Imagen", false),
    content = text("Boton", "Ver Boton")
}) => {

    return (
        <Card className={styles.wrapper_notas} to={slug}>
            <div className={styles.wrapper_notas_sm}>
                <div className={styles.content_notas}>
                    <Text className={styles.title_notas_sm} content={title} />
                    {
                        video ? <CategoriaVideo /> :
                            picture ? <CategoriaImagen /> :
                                <CategoriaTexto content={content} />
                    }
                </div>
                <img className={styles.img_medidas} src={image} alt={alt} />
            </div>
        </Card>
    )
}

export const CardNotasLg = ({
    slug = text("Slug", "/"),
    title = text("Titulo", "Estás son las cinco lagunas más grandes del país"),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen"),
    video = boolean("Es Video", false),
    picture = boolean("Es Imagen", false),
    content = text("Boton", "Ver Boton")
}) => {

    return (

        <Card className={styles.wrapper_notas} to={slug}>
            <div className={styles.wrapper_notas_lg}>
                <div className={styles.content_notas}>
                    <Text className={styles.title_notas_lg} content={title} />
                    {
                        video ? <CategoriaVideo /> :
                            picture ? <CategoriaImagen /> :
                                <CategoriaTexto content={content} />
                    }
                </div>
                <img className={styles.img_medidas} src={image} alt={alt} />
            </div>
        </Card>
    )
}
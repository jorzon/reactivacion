import React from 'react'
import styles from './newbutton.module.scss'
import Button from './ButtonNew';
import { MemoryRouter } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: 'Button'
};

export const ButtonFooterSubscribe = () => {
    return (
        <Button anchor url="https://www.ytuqueplanes.com/suscribete.aspx" className={styles.wrapper_footer_subscribe}>
            Suscríbete
        </Button>
    )
}

export const ButtonHomeHero = () => {
    return (
        <Button anchor url="https://www.ytuqueplanes.com/suscribete.aspx" className={styles.wrapper_home_hero}>
            Ver más
        </Button>
    )
}

export const ButtonHomeMedidas = () => {
    return (
        <MemoryRouter>
            <Button className={styles.wrapper_home_medidas}>
                Ver todas las notas
            </Button>
        </MemoryRouter>
    )
}

export const ButtonHomeMedidasCard = () => {
    return (
        <Button action className={styles.wrapper_home_medidas_card}>
            Leer más
        </Button>
    )
}

export const ButtonSingle = ({ content, yellow, pink }) => {
    return (
        <Button anchor className={yellow ? styles.wrapper_single_yellow : pink ? styles.wrapper_single_pink : ''}>
            {content}
        </Button>
    )
}

export const ButtonFooter = ({ content, green, pink, icon, url }) => {
    return (
        <Button anchor url={url} className={green ? styles.wrapper_footer_green : pink ? styles.wrapper_footer_pink : ''}>
            <FontAwesomeIcon className={styles.icon} icon={icon}/>
            {content}
        </Button>
    )
}

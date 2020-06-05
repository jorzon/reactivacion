import React, { useState, Fragment } from 'react'
import styles from './newbutton.module.scss'
import Button from './ButtonNew';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
        <Button to="/ver-todo" className={styles.wrapper_home_medidas}>
            Ver todas las notas
        </Button>
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

export const ButtonFooter = ({ content, green, pink, wsp, url }) => {
    return (
        <Button anchor url={url} className={green ? styles.wrapper_footer_green : pink ? styles.wrapper_footer_pink : ''}>
            {
                wsp ? <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} /> : ''
            }
            {content}
        </Button>
    )
}

export const ButtonFilter = ({ filter1, filter2 }) => {
    const [isActive1, setIsActive1] = useState(true)

    const handleIsActive1 = () => {
        setIsActive1(true)
        setIsActive2(false)
        filter1()
    }

    const [isActive2, setIsActive2] = useState(false)

    const handleIsActive2 = () => {
        setIsActive2(true)
        setIsActive1(false)
        filter2()
    }
    return (
        <Fragment>
            <Button
                isActive1={isActive1}
                action
                onClick={handleIsActive1}
                className={isActive1 ? styles.wrapper_filter_active : styles.wrapper_filter}>
                Comunicados
            </Button>
            <Button
                isActive2={isActive2}
                action
                onClick={handleIsActive2}
                className={isActive2 ? styles.wrapper_filter_active : styles.wrapper_filter}>
                Notas
            </Button>
        </Fragment>
    )
}

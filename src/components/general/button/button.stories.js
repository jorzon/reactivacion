import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styles from './newbutton.module.scss'
import Button from './ButtonNew';

export default {
    title: 'Button',
    decorators: [withKnobs]
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
            Ver Más
        </Button>
    )
}

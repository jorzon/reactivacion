import React from 'react'
import { withKnobs, text, number } from "@storybook/addon-knobs";
import Hero from './Hero';
import styles from './hero.module.scss'
import Text from 'components/general/text/Text';
import {ButtonHomeHero} from 'components/general/button/button.stories.js'
import banner from 'aasets/img/slider.jpg'

export default {
    title: 'Hero',
    decorators: [withKnobs]
};

export const HeroHome = () => {
    return (
        <Hero
            className={styles.wrapper_home}
            image={banner}
            alt="ofertas-banner"
        >
            <div className={styles.content_home}>
                <Text className={styles.text_home} content="Nos estamos preparando" />
                <ButtonHomeHero/>
            </div>
        </Hero>
    )
}




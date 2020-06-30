import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Hero from './Hero';
import styles from './hero.module.scss'
import Text from 'components/general/text/Text';
import { ButtonHomeHero } from 'components/general/button/button.stories.js'
import banner_home from 'assets/img/slider.jpg'
import banner_mobile from 'assets/img/banner.jpeg'
import video_home from 'assets/img/paisajes-del-peru.mp4'
import Logo from "assets/img/ytqp-logo.png";
import promperu from 'assets/img/logo-promperu.png'

export default {
    title: 'Hero',
    decorators: [withKnobs]
};

export const HeroHome = () => {
    return (
        <Hero
            home
            className={styles.wrapper_home}
            alt="home-banner"
            video={video_home}
            image={banner_mobile}
        >
            <div className={styles.content_home}>
                <img className={styles.promperu} src={promperu} alt="promperu-logo"/>
                <Text headingLevel="h1" className={styles.text_home} content="Vamos a volver" />
                <img className={styles.logo} src={Logo} alt="ytuqueplanes-logo" />
                {/*<ButtonHomeHero />*/}
            </div>
        </Hero>
    )
}

export const HeroSingle = ({
    alt = text("Alt", "alt-de-la-imagen"),
    image = text("Image", banner_home)

}) => {
    return (
        <Hero
            className={styles.wrapper_single}
            image={image}
            alt={alt}
        />
    )
}

export const BottomHeroSingle = ({
    alt = text("Alt", "alt-de-la-imagen"),
    image = text("Image", banner_home)

}) => {
    return (
        <Hero
            className={styles.wrapper_single}
            image={image}
            alt={alt}
        />
    )
}




import React from 'react'
import styles from './hero.module.scss'


const Hero = ({ className, image, alt, children }) => {
    return (
        <section className={className}>
            {children}
            <img className={styles.img} src={image} alt={alt} />
        </section>
    )
}

export default Hero
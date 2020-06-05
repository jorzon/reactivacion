import React from 'react'
import { withKnobs, text, number } from "@storybook/addon-knobs";
import styles from './chip.module.scss'
import Chip from './Chip';

export default {
    title: 'Card',
    decorators: [withKnobs]
};

export const ChipMedidas = ({
    title = text("Titulo", "Nuevo")
}) => {

    return (
        <Chip className={styles.wrapper}>
            {title}
        </Chip>
    )
}
import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styles from './header.module.scss'
import Header from './Header';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Header',
    decorators: [withKnobs]
};

export const HeaderSingle = ({
    to = text("Slug", "/"),
    content = text("Titulo", "Notas")
}) => {

    return (
        <Header single>
            <Link className={styles.title_single} to={to}>
               <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />Volver a {content}
            </Link>
        </Header>
    );
};

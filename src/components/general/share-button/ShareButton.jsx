import React from "react";
import styles from './share-button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ShareButton = () => {
  return (
    <button className={styles.button}>
      <FontAwesomeIcon className={styles.icon} icon={faShareAlt} />
    </button>
  );
};

export default ShareButton;

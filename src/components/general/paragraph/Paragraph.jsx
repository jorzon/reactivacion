import React from "react";
import styles from "./paragraph.module.scss";
import ReactMarkdown from "react-markdown/with-html";
import breaks from "remark-breaks";

const Paragraph = ({ source }) => {
  return (
    <ReactMarkdown
      className={styles.wrapper}
      source={source}
      escapeHtml={false}
    />
  );
};

export default Paragraph;

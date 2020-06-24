import React from "react";
import styles from "./paragraph.module.scss";
import ReactMarkdown from "react-markdown";

const Paragraph = ({ source }) => {
  return (
    <ReactMarkdown
      className={styles.wrapper}
      source={source}
      escapeHtml={false}
      renderers={{link: props => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>}}
    />
  );
};

export default Paragraph;

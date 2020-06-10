import React from "react";
import styles from "./paragraph.module.scss";
import ReactMarkdown from "react-markdown";

const Paragraph = ({ source }) => {
  return (
    <article className={styles.wrapper}>
      <ReactMarkdown skipHtml={true} source={source} />
    </article>
  );
};

export default Paragraph;

import React from "react";
import styles from "./Image.module.scss";

const Image = ({ src, alt }) => (
  <div className={styles.image}>
    <img src={src} alt={alt} />
  </div>
);

export default Image;

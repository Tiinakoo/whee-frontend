import React from "react";
import styles from "./Icon.module.scss";
import { ReactComponent as Triangle } from "../../../images/triangle.svg";
import { ReactComponent as Rectangle } from "../../../images/rectangle.svg";
import { ReactComponent as Circle } from "../../../images/circle.svg";

const Icon = ({ iconName }) => {
  switch (iconName) {
    case "Triangle":
      return <Triangle className={styles.icon} />;

    case "Rectangle":
      return <Rectangle className={styles.icon} />;

    case "Circle":
      return <Circle className={styles.icon} />;

    default:
      return null;
  }
};

export default Icon;

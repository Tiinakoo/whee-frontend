import React from "react";
import styles from "./Icon.module.scss";
import { ReactComponent as Triangle } from "../../../images/triangle.svg";
import { ReactComponent as Rectangle } from "../../../images/rectangle.svg";
import { ReactComponent as Circle } from "../../../images/circle.svg";
import { ReactComponent as ShoppingCart } from "../../../images/cart-icon-2.svg";
import classNames from "classnames";
import upperFirst from "lodash/fp/upperFirst";

const Icon = ({ iconName, navigation, className }) => {
  const icon = upperFirst(iconName);

  const classes = classNames([
    styles.icon,
    {
      [styles.icon__navigation]: navigation,
    },
    className,
  ]);

  switch (icon) {
    case "Triangle":
      return <Triangle className={classes} />;

    case "Rectangle":
      return <Rectangle className={classes} />;

    case "Circle":
      return <Circle className={classes} />;

    case "ShoppingCart":
      return <ShoppingCart className={classes} />;

    default:
      return null;
  }
};

export default Icon;

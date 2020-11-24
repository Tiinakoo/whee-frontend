import React from "react";
import upperFirst from "lodash/fp/upperFirst";
import styles from "./BodyText.module.scss";
import classNames from "classnames";

const BodyText = ({
  size = "md",
  font = "body",
  centeredVertically,
  alignRight,
  className,
  children,
  ...props
}) => {
  const classes = classNames([
    styles.bodyText,
    styles[`bodyText__font${upperFirst(font)}`],
    styles[`bodyText__size${upperFirst(size)}`],
    {
      [styles.bodyText__centeredVertically]: centeredVertically,
      [styles.bodyText__alignRight]: alignRight,
    },
    className,
  ]);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

export default BodyText;

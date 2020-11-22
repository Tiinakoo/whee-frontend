import React from "react";
import upperFirst from "lodash/fp/upperFirst";
import styles from "./BodyText.module.scss";
import classNames from "classnames";

const BodyText = ({
  size = "sm",
  font = "body",
  centeredVertically,
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

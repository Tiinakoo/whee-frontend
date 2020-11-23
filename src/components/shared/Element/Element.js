import React from "react";
import styles from "./Element.module.scss";
import classNames from "classnames";
import upperFirst from "lodash/fp/upperFirst";

const Element = ({ minWidth, className, children, ...props }) => {
  const classes = classNames([
    styles.element,
    styles[`element__minWidth${upperFirst(minWidth)}`],
    className,
  ]);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Element;

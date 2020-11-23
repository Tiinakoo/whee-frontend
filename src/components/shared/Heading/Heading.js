import React from "react";
import upperFirst from "lodash/fp/upperFirst";
import styles from "./Heading.module.scss";
import classNames from "classnames";

const Heading = ({
  size = "md",
  centeredVertically,
  className,
  children,
  ...props
}) => {
  const classes = classNames([
    styles.heading,
    styles[`heading__size${upperFirst(size)}`],
    {
      [styles.heading__centeredVertically]: centeredVertically,
    },
    className,
  ]);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

export default Heading;

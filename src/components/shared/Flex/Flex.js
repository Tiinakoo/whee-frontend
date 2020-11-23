import React from "react";
import styles from "./Flex.module.scss";
import classNames from "classnames";

const Flex = ({
  className,
  children,
  centered,
  centeredVertically = centered,
  centeredHorizontally = centered,
  spaceBetween,
  lineUpHorizontally,
  lineUpHorizontallyTo,
  ...props
}) => {
  const classes = classNames([
    styles.flex,
    {
      [styles.flex__centeredVertically]: centeredVertically,
      [styles.flex__centeredHorizontally]: centeredHorizontally,
      [styles.flex__spaceBetween]: spaceBetween,
      [styles.flex__lineUpHorizontallyToMdScreen]:
        lineUpHorizontallyTo === "md",
      [styles.flex__lineUpHorizontally]: lineUpHorizontally,
    },
    className,
  ]);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Flex;

import React from "react";
import styles from "./Flex.module.scss";
import classNames from "classnames";

const Flex = ({
  className,
  children,
  centered,
  centeredVertically = centered,
  centeredHorizontally = centered,
  lineUpHorizontally,
  lineUpHorizontallyTo,
  ...props
}) => {
  const classNameParameters = [
    styles.flex,
    {
      [styles.flex__centeredVertically]: centeredVertically,
      [styles.flex__centeredHorizontally]: centeredHorizontally,
      [styles.flex__lineUpHorizontallyToMdScreen]:
        lineUpHorizontallyTo === "md",
      [styles.flex__lineUpHorizontally]: lineUpHorizontally,
    },
    className,
  ];

  return (
    <div className={classNames(classNameParameters)} {...props}>
      {children}
    </div>
  );
};

export default Flex;

import React from "react";
import styles from "./Page.module.scss";
import classNames from "classnames";

const Page = ({ className, children, ...props }) => {
  const classes = classNames([styles.page, className]);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Page;

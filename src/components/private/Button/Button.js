import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./Button.module.scss";
import upperFirst from "lodash/fp/upperFirst";
import classNames from "classnames";

const Button = ({
  variant,
  size,
  attention,
  onClick,
  className,
  children,
  ...props
}) => {
  const classNameParameters = [
    styles.button,
    styles[`button__${variant}`],
    {
      [styles.button__attention]: attention,
    },
    styles[`button__size${upperFirst(size)}`],
    className,
  ];

  return (
    <button
      type="button"
      className={classNames(classNameParameters)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default observer(Button);

import React from "react";
import logo from "../images/logo.png";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <div className={styles.navigation}>
    <img src={logo} alt="Logo" />
  </div>
);

export default Navigation;

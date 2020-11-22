import React from "react";
import logo from "../images/logo.png";
import styles from "./Navigation.module.scss";
import translations from "../translations";
import getLanguage from "../doings/getLanguage/getLanguage";
import BodyText from "../components/shared/BodyText/BodyText";

const localTranslation = translations[getLanguage()];

const Navigation = () => (
  <div className={styles.navigation}>
    <img src={logo} alt="Logo" />

    <BodyText size="md">{localTranslation.slogan}</BodyText>
  </div>
);

export default Navigation;

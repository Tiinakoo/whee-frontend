import React from "react";
import logo from "../images/logo.png";
import styles from "./Navigation.module.scss";
import translations from "../translations";
import getLanguage from "../doings/getLanguage/getLanguage";
import BodyText from "../components/shared/BodyText/BodyText";
import Flex from "../components/shared/Flex/Flex";
import Image from "../components/shared/Image/Image";

const localTranslation = translations[getLanguage()];

const Navigation = () => (
  <div className={styles.navigation}>
    <Flex lineUpHorizontallyTo="md">
      <Image src={logo} alt={localTranslation.logo} />

      <BodyText font="highlight" size="md">
        {localTranslation.slogan}
      </BodyText>
    </Flex>
  </div>
);

export default Navigation;

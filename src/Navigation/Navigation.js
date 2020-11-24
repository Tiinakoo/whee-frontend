import React from "react";
import logo from "../images/logo.png";
import styles from "./Navigation.module.scss";
import translations from "../translations";
import getLanguage from "../doings/getLanguage/getLanguage";
import BodyText from "../components/shared/BodyText/BodyText";
import Flex from "../components/shared/Flex/Flex";
import Image from "../components/shared/Image/Image";
import { observer } from "mobx-react-lite";
import Icon from "../components/shared/Icon/Icon";
import Element from "../components/shared/Element/Element";

const localTranslation = translations[getLanguage()];

const Navigation = ({ shoppingCartStatus }) => {
  return (
    <Flex spaceBetween lineUpHorizontally className={styles.navigation}>
      <Flex lineUpHorizontallyTo="md">
        <Image src={logo} alt={localTranslation.logo} />

        <BodyText font="highlight" size="sm">
          {localTranslation.slogan}
        </BodyText>
      </Flex>

      <Element padding="sm">
        <Flex lineUpHorizontally centeredVertically>
          <BodyText font="highlight" size="sm" alignRight>
            {shoppingCartStatus}
          </BodyText>

          <Icon iconName="shoppingCart" navigation />
        </Flex>
      </Element>
    </Flex>
  );
};

export default observer(Navigation);

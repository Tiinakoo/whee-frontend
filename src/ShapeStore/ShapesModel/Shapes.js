import React from "react";
import { observer } from "mobx-react-lite";
import Flex from "../../components/shared/Flex/Flex";
import Icon from "../../components/shared/Icon/Icon";
import Heading from "../../components/shared/Heading/Heading";
import BodyText from "../../components/shared/BodyText/BodyText";
import Element from "../../components/shared/Element/Element";
import PrimaryButton from "../../components/shared/PrimaryButton/PrimaryButton";
import translations from "../../translations";
import getLanguage from "../../doings/getLanguage/getLanguage";

const localTranslation = translations[getLanguage()];

const Shapes = ({ shapesModel: { shapes } }) => {
  return shapes.map(({ id, name, description, price, currency }) => (
    <Element padding="sm" key={id}>
      <Flex spaceBetween lineUpHorizontallyTo="md">
        <Element minWidth="sm">
          <Flex lineUpHorizontally centeredVertically>
            <Icon iconName={name} />

            <Element minWidth="md">
              <Flex>
                <Heading>{name}</Heading>

                <BodyText>{description}</BodyText>
              </Flex>
            </Element>
          </Flex>
        </Element>

        <Element minWidth="sm">
          <Flex>
            <Heading alignRight>
              {price} {currency}
            </Heading>

            <PrimaryButton>{localTranslation.addToCart}</PrimaryButton>
          </Flex>
        </Element>
      </Flex>
    </Element>
  ));
};

export default observer(Shapes);

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

const Shapes = ({ shapesModel: { shapes } }) =>
  shapes.map(({ id, name, description, price, currency, addToCart }) => (
    <div key={id}>
      <Flex spaceBetween lineUpHorizontallyTo="md">
        <Flex lineUpHorizontally centeredVertically>
          <Element padding="md" box="md">
            <Icon iconName={name} />
          </Element>

          <Flex>
            <Heading>{name}</Heading>

            <BodyText>{description}</BodyText>
          </Flex>
        </Flex>

        <Flex>
          <Heading alignRight>
            {price} {currency}
          </Heading>

          <PrimaryButton onClick={addToCart} data-add-to-cart-test={id}>
            {localTranslation.addToCart}
          </PrimaryButton>
        </Flex>
      </Flex>
    </div>
  ));

export default observer(Shapes);

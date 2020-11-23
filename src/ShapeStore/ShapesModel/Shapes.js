import React from "react";
import { observer } from "mobx-react-lite";
import Flex from "../../components/shared/Flex/Flex";
import Icon from "../../components/shared/Icon/Icon";
import Heading from "../../components/shared/Heading/Heading";
import BodyText from "../../components/shared/BodyText/BodyText";
import Element from "../../components/shared/Element/Element";

const Shapes = ({ shapesModel: { shapes } }) => {
  return shapes.map(({ id, name, description }) => (
    <div key={id}>
      <Flex lineUpHorizontally centeredVertically>
        <Icon iconName={name} />

        <Element minWidth="md">
          <Flex>
            <Heading>{name}</Heading>

            <BodyText>{description}</BodyText>
          </Flex>
        </Element>
      </Flex>
    </div>
  ));
};

export default observer(Shapes);

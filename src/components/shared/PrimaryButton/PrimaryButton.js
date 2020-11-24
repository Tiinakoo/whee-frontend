import React from "react";
import Button from "../../private/Button/Button";
import BodyText from "../BodyText/BodyText";
import { observer } from "mobx-react-lite";

const PrimaryButton = ({ onClick, size, children, ...props }) => (
  <Button onClick={onClick} variant="primary" size={size} attention {...props}>
    <BodyText font="body" size="md">
      {children}
    </BodyText>
  </Button>
);

export default observer(PrimaryButton);

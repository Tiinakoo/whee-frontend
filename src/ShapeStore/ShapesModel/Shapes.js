import React from "react";
import { observer } from "mobx-react-lite";

const Shapes = ({ shapesModel: { shapes } }) => {
  return shapes.map(({ id, name }) => <div key={id}>{name}</div>);
};

export default observer(Shapes);


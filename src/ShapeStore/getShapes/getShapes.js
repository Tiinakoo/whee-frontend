import uuid from "uuid";

export const dependencies = {
  callApiForShapes: () => [
    {
      id: uuid(),
      name: "Circle",
      description: "Perfect choice when you don’t need any corners",
      price: 999,
      currency: "€",
    },
    {
      id: uuid(),
      name: "Rectangle",
      description: "For once, it’s a great idea to think inside the box.",
      price: 899,
      currency: "€",
    },
    {
      id: uuid(),
      name: "Triangle",
      description: "A true classic with three elegant corners.",
      price: 1009,
      currency: "€",
    },
  ],
};

export default () => {
  const response = dependencies.callApiForShapes();

  return { callWasSuccessful: true, response };
};

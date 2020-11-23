import getShapesImport from "../getShapes/getShapes";
import { makeAutoObservable } from "mobx";
import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
import add from "lodash/fp/add";
import some from "lodash/fp/some";
import includes from "lodash/fp/includes";
import sum from "lodash/fp/sum";
import get from "lodash/fp/get";

export default class ShapesModel {
  dependencies = {};

  constructor(getShapes = getShapesImport) {
    makeAutoObservable(this);

    this.dependencies.getShapes = getShapes;
  }

  rawShapes = [];

  shoppingCart = [];

  setShoppingCart = ({ newItem }) => {
    const alreadyHasItem = some(includes(newItem.id), this.shoppingCart);

    if (!alreadyHasItem) {
      this.shoppingCart = [...this.shoppingCart, newItem];
    } else {
      this.shoppingCart = this.shoppingCart.map((oldItem) => {
        if (oldItem.id === newItem.id) {
          return {
            id: oldItem.id,
            amount: add(newItem.amount, oldItem.amount),
          };
        } else {
          return oldItem;
        }
      });
    }
  };

  setRawShapes = (shapes) => {
    this.rawShapes = shapes;
  };

  getShapes = async () => {
    const { response: shapes } = await this.dependencies.getShapes();

    this.setRawShapes(shapes);
  };

  get shapes() {
    return this.rawShapes.map((shape) => ({
      ...shape,

      addToCart: () => {
        this.setShoppingCart({ newItem: { id: shape.id, amount: 1 } });
      },
    }));
  }

  get totalItemsInShoppingCart() {
    return flow(map(get("amount")), sum)(this.shoppingCart);
  }
}

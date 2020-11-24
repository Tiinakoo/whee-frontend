import getShapesImport from "../getShapes/getShapes";
import { makeAutoObservable } from "mobx";

import {
  isEqual,
  isEmpty,
  get,
  sum,
  includes,
  flow,
  map,
  add,
  some,
} from "lodash/fp";
import translations from "../../translations";
import getLanguage from "../../doings/getLanguage/getLanguage";

const localTranslation = translations[getLanguage()];

export default class ShapesModel {
  dependencies = {};

  constructor(getShapes = getShapesImport) {
    makeAutoObservable(this);

    this.dependencies.getShapes = getShapes;
  }

  _rawShapes = [];

  _setRawShapes = (shapes) => {
    this._rawShapes = shapes;
  };

  getShapes = async () => {
    const { response: shapes } = await this.dependencies.getShapes();

    this._setRawShapes(shapes);
  };

  get shapes() {
    return this._rawShapes.map((shape) => ({
      ...shape,

      addToCart: () => {
        this._setShoppingCart({ newItem: { id: shape.id, amount: 1 } });
      },
    }));
  }

  shoppingCart = [];

  _setShoppingCart = ({ newItem }) => {
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

  get totalItemsInShoppingCart() {
    return flow(map(get("amount")), sum)(this.shoppingCart);
  }

  get shoppingCartStatus() {
    return isEmpty(this.shoppingCart)
      ? localTranslation.noItemsInCart
      : getTranslationFor(this.totalItemsInShoppingCart);
  }
}

const getTranslationFor = (totalItemsInShoppingCart) =>
  isEqual(totalItemsInShoppingCart, 1)
    ? localTranslation.oneItemInCart
    : `${totalItemsInShoppingCart} ${localTranslation.severalItemsInCart}`;

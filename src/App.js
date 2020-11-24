import "./App.css";
import React from "react";
import Page from "./components/shared/Page/Page";
import Navigation from "./Navigation/Navigation";
import Shapes from "./ShapeStore/ShapesModel/Shapes";
import { observer } from "mobx-react-lite";

function App({ shapesModel }) {
  return (
    <>
      <Navigation shoppingCartStatus={shapesModel.shoppingCartStatus} />

      <Page>
        <Shapes shapesModel={shapesModel} />
      </Page>
    </>
  );
}

export default observer(App);

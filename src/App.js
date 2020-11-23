import "./App.css";
import React from "react";
import Page from "./components/shared/Page/Page";
import Navigation from "./Navigation/Navigation";
import Shapes from "./ShapeStore/ShapesModel/Shapes";

function App({ shapesModel }) {
  return (
    <>
      <Navigation />

      <Page>
        <Shapes shapesModel={shapesModel} />
      </Page>
    </>
  );
}

export default App;

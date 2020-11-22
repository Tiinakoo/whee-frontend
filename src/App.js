import "./App.css";
import React from "react";
import Page from "./components/shared/Page/Page";
import Navigation from "./components/shared/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Page>
        <div className="App">This will be Whee-store</div>
      </Page>
    </>
  );
}

export default App;

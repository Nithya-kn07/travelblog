import React, { Fragment } from 'react';
import "./App.css"

import InputTravel from "./components/InputTravel";
import ListTravel from "./components/ListTravel";
function App() {
  return (
    <Fragment>
      <div className="container">
      <InputTravel/>
      <ListTravel/>
      </div>
    </Fragment>
  );
}

export default App;

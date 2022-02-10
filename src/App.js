import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import LeftMenu from "./components/SideMenu/LeftMenu";
import RightContent from "./components/RightContent/RightContent";

function App() {
  const [left, setLeft] = useState(true);
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <LeftMenu visible={left} />

        <RightContent left={left} setLeft={setLeft} />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import LeftMenu from "./components/SideMenu/LeftMenu";
import RightContent from "./components/RightContent/RightContent";

function App() {
  const [left, setLeft] = useState(true);
  const { pathname } = useLocation();
  console.log(pathname.split("/")[1]);

  return (
    <div className="App">
      <GlobalStyles />
      <LeftMenu visible={left} pathname={pathname.split("/")[1]} />

      <RightContent left={left} setLeft={setLeft} />
    </div>
  );
}

export default App;

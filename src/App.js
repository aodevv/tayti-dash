import "./App.css";
import { GlobalStyles } from "./GlobalStyles";

import { BrowserRouter as Router } from "react-router-dom";

import LeftMenu from "./components/SideMenu/LeftMenu";
import RightContent from "./components/RightContent/RightContent";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <LeftMenu />
        <RightContent />
      </div>
    </Router>
  );
}

export default App;

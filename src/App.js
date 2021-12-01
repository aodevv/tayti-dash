import "./App.css";
import { GlobalStyles } from "./GlobalStyles";

import LeftMenu from "./components/SideMenu/LeftMenu";
import RightContent from "./components/RightContent/RightContent";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <LeftMenu />
      <RightContent />
    </div>
  );
}

export default App;

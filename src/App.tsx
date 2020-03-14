import React from "react";
import { Switch, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage/FrontPage";
import HowThisWorksPage from "./pages/HowThisWorksPage/HowThisWorksPage";
import MapPage from "./pages/MapPage/MapPage";
import SelfReportPage from "./pages/SelfReportPage/SelfReportPage";

import NavBar from "./components/NavBar/NavBar.component";

interface Props {}

const App: React.FC<Props> = props => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/howthisworks">
          <HowThisWorksPage />
        </Route>
        <Route exact path="/map">
          <MapPage />
        </Route>
        <Route exact path="/selfreport">
          <SelfReportPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

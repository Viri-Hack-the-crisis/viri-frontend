import React from "react";
import { Switch, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage/FrontPage";
import MapPage from "./pages/MapPage/MapPage";
import SelfReportPage from "./pages/SelfReportPage/SelfReportPage";

import Header from "../src/components/Header/Header.component";

interface Props {}

const App: React.FC<Props> = props => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <FrontPage />
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

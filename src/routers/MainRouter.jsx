// Modules
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  ROUTE_HOME,
  ROUTE_GET_HELP,
  ROUTE_GET_SUPPORT,
  ROUTE_PLAYGROUND
} from "../constants/routes";

import HomePage from "../pages/home/Home";
import GetHelpPage from "../pages/get-help/GetHelp";
import GetSupportPage from "../pages/get-support/GetSupport";
import FourOFourPage from "../pages/four-o-four/FourOfour";
import PlayGround from "../pages/playGround/PlayGround";

const MainRouter = () => {
  return (
    <Switch>
      <Redirect strict exact from="/" to={ROUTE_HOME} />
      <Route path={ROUTE_HOME} exact component={HomePage} />
      <Route path={ROUTE_GET_HELP} exact strict component={GetHelpPage} />
      <Route path={ROUTE_GET_SUPPORT} exact strict component={GetSupportPage} />
      <Route path={ROUTE_PLAYGROUND} exact strict component={PlayGround} />
      <Route component={FourOFourPage} />
    </Switch>
  );
};

export default MainRouter;

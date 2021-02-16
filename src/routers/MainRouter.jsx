// Modules
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  ROUTE_HOME,
  ROUTE_GET_HELP,
  ROUTE_GET_SUPPORT
} from "../constants/routes";

import HomePage from "../pages/home/Home";
import GetHelpPage from "../pages/get-help/GetHelp";
import GetSupportPage from "../pages/get-support/GetSupport";
import FourOFourPage from "../pages/four-o-four/FourOfour";

const MainRouter = () => {
  return (
    <Switch>
      <Redirect strict exact from="/" to={ROUTE_HOME} />
      <Route path={ROUTE_HOME} exact component={HomePage} />
      <Route path={ROUTE_GET_HELP} exact strict component={GetHelpPage} />
      <Route path={ROUTE_GET_SUPPORT} exact strict component={GetSupportPage} />
      <Route component={FourOFourPage} />
    </Switch>
  );
};

export default MainRouter;

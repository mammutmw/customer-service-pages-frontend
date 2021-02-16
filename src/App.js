// Modules
import React from "react";
import { withRouter, HashRouter as Routers } from "react-router-dom";
import Router from "./routers/MainRouter";

const App = () => {
  return (
    <div className="app">
      <Router />
    </div>
  );
};

export default withRouter(App);

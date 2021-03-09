// Modules
import React from "react";
import {
  HashRouter as Routers,
  MemoryRouter,
  withRouter
} from "react-router-dom";
import Router from "./routers/MainRouter";

const App = () => {
  return (
    <div className="app">
      <MemoryRouter>
        <Router />
      </MemoryRouter>
    </div>
  );
};

export default withRouter(App);

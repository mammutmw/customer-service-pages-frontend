import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { LOADING_PAGES } from "../src/store/actions";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// App store
import { store, history, persistor } from "./store";

// Action constants
import { FETCH_CMS_TOPICS_REQUEST } from "./../src/store/actions";

const onBeforeLift = () => {
  // This is where we call functions:
  //  => that run on application start
  //  => that run in the background
  store.dispatch({ type: LOADING_PAGES, payload: true });
  store.dispatch({ type: FETCH_CMS_TOPICS_REQUEST });
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={onBeforeLift}
      >
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//module.hot.accept();

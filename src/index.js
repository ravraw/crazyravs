import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import reducer from "./Containers/Store/burgerBuilderReducer";

axios.defaults.baseURL = "https://crazyravs-51d75.firebaseio.com";

const logger = store => {
  return next => {
    return action => {
      console.log("[Middelware]--Dispatching", action);
      const result = next(action);
      console.log("[Middelware]next state", store.getState());
      return result;
    };
  };
};

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

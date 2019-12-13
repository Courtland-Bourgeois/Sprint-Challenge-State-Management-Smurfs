import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./components/App";
import reducer from './reducers';

// redux stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import "bootstrap/dist/css/bootstrap.min.css";
import "@telusdigital/tds/dist/tds.css";
// import "~@tds/core-colours/colours";

const store = createStore(
  reducers,
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

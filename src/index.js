import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import RootReducer from "Store/RootRouter"
import { BrowserRouter } from "react-router-dom"
const store = createStore(RootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

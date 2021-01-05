import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./store/reducers/productsReducer";
import cartReducer from "./store/reducers/cartReducer";
import checkoutFormReducer from "./store/reducers/checkoutFormReducer";

const rootReducer = combineReducers({
  productList: productsReducer,
  cart: cartReducer,
  checkout: checkoutFormReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

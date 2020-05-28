import { createStore, applyMiddleware, compose } from "redux";

import { Reducer_categories } from "../Reducers/categories_reducer";

import thunk from "redux-thunk";

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  Reducer_categories,
  composeEnhancers(applyMiddleware(...middleware))
);

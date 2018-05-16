import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./state";

const middlewares = process.env.NODE_ENV === "development" ? [logger] : [];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

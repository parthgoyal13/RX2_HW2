import { createStore, applyMiddleware } from "redux";
import loggerMiddleWare from "./loggerMiddleWare";
import bookReducer from "./bookReducer";
export default createStore(bookReducer, applyMiddleware(loggerMiddleWare));

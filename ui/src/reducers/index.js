import { combineReducers } from "redux";
import booksReducer from "./booksReducer";

const rootReducers = combineReducers({
  booksReducer: booksReducer
});

export default rootReducers;
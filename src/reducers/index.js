import { combineReducers } from "redux";
import customer from "./customer";

const combinedReducer = combineReducers({
  customer,
});

export const reducer = (state, action) => {
  return combinedReducer(state, action);
};

import { combineReducers } from "@reduxjs/toolkit";
import { toastReducer } from "./toast";
import { listPersonReducer } from "./listPerson";

const rootReducer = combineReducers({
  toastReducer,
  listPersonReducer,
});

export default rootReducer;

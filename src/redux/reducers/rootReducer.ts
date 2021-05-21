import { combineReducers } from "redux";

import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  orderStore: orderReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
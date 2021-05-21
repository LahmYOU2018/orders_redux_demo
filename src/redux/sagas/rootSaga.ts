import { all, fork } from "redux-saga/effects";

import orderSaga from "./orderSaga";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootSaga() {
  yield all([fork(orderSaga)]);
}
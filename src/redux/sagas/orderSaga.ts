/** @format */

import {FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS} from '../actions/orderTypes';
import {eventChannel} from 'redux-saga';
import {put, call, take, takeEvery, select} from 'redux-saga/effects';
import {getOrdersHash} from '../../utils/util';
import socketIOClient from 'socket.io-client';
import {ENDPOINT} from '../../utils/common';
import {orderHash} from './selectors';

// eslint-disable-next-line require-yield
function* createEventChannel(socket) {
  const currentOrderHash = yield select(orderHash);

  return eventChannel(emit => {
    socket.on('order_event', data => {
      const orderHash = getOrdersHash(currentOrderHash, data);
      const updatedOrders = Object.values(orderHash); 
      emit(updatedOrders);
    });
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  });
}

function* fetchOrderSaga() {
  const socket = socketIOClient(ENDPOINT);
  const channel = yield call(createEventChannel, socket);

  while (true) {
    const data = yield take(channel);
    yield put({
      type: FETCH_ORDER_SUCCESS,
      payload: data,
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* orderSaga() {
  yield takeEvery(FETCH_ORDER_REQUEST, fetchOrderSaga);
}

export default orderSaga;

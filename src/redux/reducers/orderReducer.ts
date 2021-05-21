/** @format */

import {FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS, FETCH_ORDER_FAILURE} from '../actions/orderTypes';
import {OrderActions} from '../actions/orderTypes';
import {OrderStoreState} from '../../dataModel/OrderStoreState';

const initialState: OrderStoreState = {
  pending: false,
  orderHash: {},
  error: {},
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const orderReducer = (state = initialState, action: OrderActions) => {
  switch (action.type) {
  case FETCH_ORDER_REQUEST:
    return {
      ...state,
      pending: true,
    };
  case FETCH_ORDER_SUCCESS:
    return {
      ...state,
      pending: false,
      orderHash: action.payload,
      error: {},
    };
  case FETCH_ORDER_FAILURE:
    return {
      ...state,
      pending: false,
      orderHash: {},
      error: action.payload,
    };
  default:
    return {
      ...state,
    };
  }
};

export default orderReducer;
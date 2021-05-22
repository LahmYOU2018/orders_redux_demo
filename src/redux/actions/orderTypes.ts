/** @format */

import { OrderHashProps } from '../../dataModel/OrderHash';
import { ErrorStoreState } from '../../dataModel/ErrorStoreState';

export const FETCH_ORDER_REQUEST = 'FETCH_ORDER_REQUEST';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_FAILURE = 'FETCH_ORDER_FAILURE';
export const INVALID_TYPE = 'INVALID_TYPE';

export interface InvalidRequest {
  type: typeof INVALID_TYPE;
}

export interface FetchOrderRequest {
  type: typeof FETCH_ORDER_REQUEST;
}

export type FetchOrderSuccess = {
  type: typeof FETCH_ORDER_SUCCESS;
  payload: OrderHashProps;
};

export type FetchOrderFailure = {
  type: typeof FETCH_ORDER_FAILURE;
  payload: ErrorStoreState;
};

export type OrderActions = FetchOrderRequest | FetchOrderSuccess | FetchOrderFailure | InvalidRequest;

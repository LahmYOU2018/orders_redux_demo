/** @format */

import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  FetchOrderRequest,
  FetchOrderSuccess,
  FetchOrderFailure,
} from './orderTypes';

import { OrderHashProps } from '../../dataModel/OrderHash';
import { ErrorStoreState } from '../../dataModel/ErrorStoreState';

export const fetchOrderRequest = (): FetchOrderRequest => ({
  type: FETCH_ORDER_REQUEST,
});

export const fetchOrderSuccess = (payload: OrderHashProps): FetchOrderSuccess => ({
  type: FETCH_ORDER_SUCCESS,
  payload,
});

export const fetchOrderFailure = (payload: ErrorStoreState): FetchOrderFailure => ({
  type: FETCH_ORDER_FAILURE,
  payload,
});

/** @format */

import { FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS, FETCH_ORDER_FAILURE, INVALID_TYPE } from '../actions/orderTypes';
import orderReducer from './orderReducer';

const initialState = {
  pending: false,
  orderHash: {},
  error: {},
};

describe('Order Reducer', () => {
  it('should return initialState', () => {
    expect(
      orderReducer(undefined, {
        type: INVALID_TYPE,
      })
    ).toEqual(initialState);
  });

  it('should handle FETCH_ORDER_REQUEST', () => {
    const expected = {
      pending: true,
      orderHash: {},
      error: {},
    };
    expect(
      orderReducer(undefined, {
        type: FETCH_ORDER_REQUEST,
      })
    ).toEqual(expected);
  });

  it('should handle FETCH_ORDER_SUCCESS', () => {
    const orderHash = {
      d0791ce1: {
        customer: 'Carla Garner',
        destination: '61109 Alan Motorway, North Corey, CA 92789',
        event_name: 'CREATED',
        id: 'd0791ce1',
        item: 'Caesar salad',
        price: 4692,
        sent_at_second: 6,
      },
    };
    const expected = {
      pending: false,
      orderHash,
      error: {},
    };
    expect(
      orderReducer(undefined, {
        type: FETCH_ORDER_SUCCESS,
        payload: orderHash,
      })
    ).toEqual(expected);
  });

  it('should handle FETCH_ORDER_FAILURE', () => {
    const payload = {
      errorCode: '404',
      errorMessage: '404 error',
    };
    const expected = {
      pending: false,
      orderHash: {},
      error: payload,
    };
    expect(
      orderReducer(undefined, {
        type: FETCH_ORDER_FAILURE,
        payload,
      })
    ).toEqual(expected);
  });
});

/** @format */

import {fetchOrderRequest, fetchOrderSuccess, fetchOrderFailure} from './orderActions';
import {FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS, FETCH_ORDER_FAILURE} from './orderTypes';

describe('Order Actions', () => {
  it('should create FETCH_ORDER_REQUEST action', () => {
    const expectedAction = {
      type: FETCH_ORDER_REQUEST,
    };

    expect(fetchOrderRequest()).toEqual(expectedAction);
  });

  it('should create FETCH_ORDER_REQUEST action', () => {
    const payload = {
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

    const expectedAction = {
      type: FETCH_ORDER_SUCCESS,
      payload,
    };

    expect(fetchOrderSuccess(payload)).toEqual(expectedAction);
  });

  it('should create FETCH_ORDER_REQUEST action', () => {
    const payload = {
      errorCode: '404',
      errorMessage: '404 error',
    };
    const expectedAction = {
      type: FETCH_ORDER_FAILURE,
      payload,
    };

    expect(fetchOrderFailure(payload)).toEqual(expectedAction);
  });
});

/** @format */

import {OrderProps} from '../dataModel/Order';
import {OrderHashProps} from '../dataModel/OrderHash';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getOrdersHash = (orderHash: OrderHashProps, orders: OrderProps[]) => {
  return orders.reduce(function (acc, obj) {
    acc[obj['id']] = obj;
    return acc;
  }, orderHash);
};

export const getPriceStr = (price: number): string => {
  return `$ ${price / 100}`;
};

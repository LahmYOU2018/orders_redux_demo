import {OrderProps} from '../dataModel/Order';

export const getOrdersHash = (() => {
  const hash = {};
  return (orders: OrderProps[]) => {
    return orders.reduce(function (acc, obj) {
      acc[obj['id']] = obj;
      return acc;
    }, hash);
  };
})();

export const getPriceStr = (price: number):string => {
  return `$ ${price/100}`;
};
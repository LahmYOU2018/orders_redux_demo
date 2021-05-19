import {OrderProps} from '../dataModel/Order';

export const getOrdersHash = (() => {
  const hash = {};
  return (objectArray: OrderProps[]) => {
    return objectArray.reduce(function (acc, obj) {
      acc[obj['id']] = obj;
      return acc;
    }, hash);
  };
})();

/** @format */

import { useState, useEffect } from 'react';
import { OrderProps } from '../dataModel/Order';

export const useFilterOrders = (orders: OrderProps[], searchValue: string): OrderProps[] => {
  const [filteredOrders, setfilteredOrders] = useState(orders);

  useEffect(() => {
    const valueToSearch = parseFloat(searchValue);
    if (isNaN(valueToSearch)) {
      setfilteredOrders(orders);
    } else {
      const filteredOrders = orders.filter(order => order['price'] === Math.round(valueToSearch * 100));
      setfilteredOrders(filteredOrders);
    }
  }, [orders, searchValue]);

  return filteredOrders;
};

import { useState, useEffect } from "react";
import {OrderProps} from '../dataModel/Order';

export const useFilterOrders = (orders: OrderProps[], searchValue: number | null) : OrderProps[] => {
  const [filteredOrders, setfilteredOrders] = useState(orders);

  useEffect(() => {
    if (typeof searchValue !== 'number') {
      setfilteredOrders(orders);
    } else{
      const filteredOrders = orders.filter(order => order['price'] === searchValue);
      setfilteredOrders(filteredOrders);
    }
  }, [orders, searchValue]);

  return filteredOrders;
};
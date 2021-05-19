import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {OrderProps} from '../dataModel/Order';
import {getOrdersHash} from '../utils/util';

export const useFetchOrders = (url: string): OrderProps[] => {
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    const socket = socketIOClient(url);
    socket.on("order_event", data => {
      const orderHash = getOrdersHash(data);
      const updatedOrders: OrderProps[]= Object.values(orderHash); 
      setOrders(updatedOrders);
    });
  }, []);

  return orders;
};
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {OrderProps} from '../dataModel/Order';

export const useFetchOrders = (url: string): OrderProps[] => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(url);
    socket.on("order_event", data => {
      setOrders(data);
    });
  }, []);

  return orders;
};
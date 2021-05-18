import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {ENDPOINT} from './utils/common';
import { OrderPage } from "./containers/OrderPage";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("order_event", data => {
      setOrders(data);
    });
  }, []);

  return (
    <OrderPage orders={orders}/>
  );
}

export default App;
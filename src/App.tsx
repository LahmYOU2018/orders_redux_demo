import {ENDPOINT} from './utils/common';
import { OrderPage } from "./containers/OrderPage";
import { useFetchOrders } from "./customHooks/useFetchOrders";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const orders = useFetchOrders(ENDPOINT);

  return (
    <OrderPage orders={orders}/>
  );
}

export default App;
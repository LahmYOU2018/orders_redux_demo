// import {ENDPOINT} from './utils/common';
import { OrderPage } from "./containers/OrderPage";
// import { useFetchOrders } from "./customHooks/useFetchOrders";
import {connect} from 'react-redux';
import {fetchOrderRequest} from './redux/actions/orderActions';
import {useEffect} from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App(props) {
  const {fetchOrders, orders} = props;
  // const orders = useFetchOrders(ENDPOINT);

  useEffect(() => {
    fetchOrders();
  },[]);

  return (
    <OrderPage orders={Object.values(orders)}/>
  );
}

const mapStateToProps = (state) => ({
  orders: state.orderStore.orderHash
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrderRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
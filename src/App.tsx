import { OrderPage } from "./containers/OrderPage";
import {connect} from 'react-redux';
import {fetchOrderRequest} from './redux/actions/orderActions';
import {useEffect} from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App(props) {
  const {fetchOrders, orders} = props;

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
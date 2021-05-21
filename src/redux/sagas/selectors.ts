import {OrderStoreState} from '../../dataModel/OrderStoreState';

interface Store {
  orderStore: OrderStoreState
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const orderHash = (state: Store) => state.orderStore.orderHash;
import {OrderHashProps} from './OrderHash';
import { ErrorStoreState } from './ErrorStoreState';

export interface OrderStoreState {
  pending: boolean;
  orderHash: OrderHashProps;
  error: ErrorStoreState;
}
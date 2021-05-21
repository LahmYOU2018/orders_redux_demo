interface OrderPropsKeys {
  [key: string]: string | number;
}

export interface OrderProps extends OrderPropsKeys{
  id: string;
  customer: string;
  destination: string;
  item: string;
  price: number;
  event_name: string;
}
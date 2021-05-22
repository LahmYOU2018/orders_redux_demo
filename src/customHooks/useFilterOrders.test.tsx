/** @format */

import { renderHook } from '@testing-library/react-hooks';
import { useFilterOrders } from './useFilterOrders';

const orders = [
  {
    customer: 'Amanda Roberts',
    destination: '759 Thompson Union, East Natalie, CA 96079',
    event_name: 'CREATED',
    id: '188af307',
    item: 'Chicken kabob',
    price: 8850,
    sent_at_second: 297,
  },
  {
    customer: 'Carla Garner',
    destination: '61109 Alan Motorway, North Corey, CA 92789',
    event_name: 'COOKED',
    id: 'd0791ce1',
    item: 'Caesar salad',
    price: 4692,
    sent_at_second: 13,
  },
];

describe('useFilterOrders', () => {
  it('should return all orders if search input is empty', () => {
    const valueToSearch = '';
    const { result } = renderHook(() => useFilterOrders(orders, valueToSearch));
    expect(result.current).toStrictEqual(orders);
  });

  it('should return empty string if there is no match', () => {
    const expected = [];
    const valueToSearch = '4723kjk';
    const { result } = renderHook(() => useFilterOrders(orders, valueToSearch));
    expect(result.current).toStrictEqual(expected);
  });

  it('should get filtered orders', () => {
    const expected = [
      {
        customer: 'Carla Garner',
        destination: '61109 Alan Motorway, North Corey, CA 92789',
        event_name: 'COOKED',
        id: 'd0791ce1',
        item: 'Caesar salad',
        price: 4692,
        sent_at_second: 13,
      },
    ];
    const valueToSearch = '46.92';
    const { result } = renderHook(() => useFilterOrders(orders, valueToSearch));
    expect(result.current).toStrictEqual(expected);
  });
});

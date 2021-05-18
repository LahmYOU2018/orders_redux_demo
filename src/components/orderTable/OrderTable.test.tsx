/** @format */

import {mount} from 'enzyme';
import {OrderTable} from './OrderTable';
import {TABLE_HEADERS} from '../../utils/common';

describe('Order Tale', () => {
  const orderList = [
    {
      "customer": "Amanda Roberts",
      "destination": "759 Thompson Union, East Natalie, CA 96079",
      "event_name": "CREATED",
      "id": "188af307",
      "item": "Chicken kabob",
      "price": 8850,
      "sent_at_second": 297
    },
    {
      "customer": "Amanda Roberts",
      "destination": "759 Thompson Union, East Natalie, CA 96079",
      "event_name": "COOKED",
      "id": "188af307",
      "item": "Chicken kabob",
      "price": 8850,
      "sent_at_second": 307
    }
  ];

  test('should render table header', () => {
    const mountedComponent = mount(
      <OrderTable orderList={orderList}/>
    );
    expect(mountedComponent.find('thead')).toHaveLength(1);
    expect(mountedComponent.find('thead td')).toHaveLength(6);
    const tableHeader = mountedComponent.find('thead td').map(node => node.text());
    expect(tableHeader).toEqual(TABLE_HEADERS);
  });

  test('should render table body', () => {
    const mountedComponent = mount(
      <OrderTable orderList={orderList}/>
    );
    expect(mountedComponent.find('tbody')).toHaveLength(1);
    expect(mountedComponent.find('tbody tr')).toHaveLength(2);
    expect(mountedComponent.find('tbody tr td')).toHaveLength(12);
  });

  test('should not render table row in table body', () => {
    const mountedComponent = mount(
      <OrderTable />
    );

    expect(mountedComponent.find('tbody')).toHaveLength(1);
    expect(mountedComponent.find('tbody tr')).toHaveLength(0);
    expect(mountedComponent.find('tbody tr td')).toHaveLength(0);
  });
});

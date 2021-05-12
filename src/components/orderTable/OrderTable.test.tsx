/** @format */

import {mount} from 'enzyme';
import {OrderTable} from './OrderTable';

describe('Order Tale', () => {
  const orderList = [
    {
      "customer": "Carla Garner",
      "destination": "61109 Alan Motorway, North Corey, CA 92789",
      "item": "Caesar salad",
      "price": 4692
    },
    {
      "customer": "Carla Garner",
      "destination": "61109 Alan Motorway, North Corey, CA 92789",
      "item": "Caesar salad",
      "price": 4692
    }
  ];

  test('should render table header', () => {
    const mountedComponent = mount(
      <OrderTable orderList={orderList}/>
    );
    expect(mountedComponent.find('thead')).toHaveLength(1);
    expect(mountedComponent.find('thead td')).toHaveLength(4);
  });

  test('should render table body', () => {
    const mountedComponent = mount(
      <OrderTable orderList={orderList}/>
    );
    expect(mountedComponent.find('tbody')).toHaveLength(1);
    expect(mountedComponent.find('tbody tr')).toHaveLength(2);
    expect(mountedComponent.find('tbody tr td')).toHaveLength(8);
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

/** @format */

import {shallow} from 'enzyme';
import {OrderPage} from './OrderPage';
import {SearchBar} from '../components/searchBar/SearchBar';
import {OrderTable} from '../components/orderTable/OrderTable';

describe('Tab Panel Content List', () => {
  const orders = [
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

  test('should renderheader, search bar and order table if there is no order', () => {
    const shallowComponent = shallow(<OrderPage />);
    expect(shallowComponent.find('OrderPageLayout')).toHaveLength(1);
    expect(shallowComponent.find('OrderPageHeader')).toHaveLength(1);
    expect(shallowComponent.find(SearchBar)).toHaveLength(1);
    expect(shallowComponent.find(OrderTable)).toHaveLength(1);
  });
  
  test('should render header, search bar and order table when there are orders', () => {
    const shallowComponent = shallow(<OrderPage orders={orders} />);
    expect(shallowComponent.find('OrderPageLayout')).toHaveLength(1);
    expect(shallowComponent.find('OrderPageHeader')).toHaveLength(1);
    expect(shallowComponent.find(SearchBar)).toHaveLength(1);
    expect(shallowComponent.find(OrderTable)).toHaveLength(1);
  });
});

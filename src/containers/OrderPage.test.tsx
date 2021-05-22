/** @format */

import {shallow} from 'enzyme';
import {OrderPage} from './OrderPage';
import {SearchBar} from '../components/searchBar/SearchBar';
import {OrderTable} from '../components/orderTable/OrderTable';

describe('Order Page', () => {
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
      "customer": "Carla Garner",
      "destination": "61109 Alan Motorway, North Corey, CA 92789",
      "event_name": "COOKED",
      "id": "d0791ce1",
      "item": "Caesar salad",
      "price": 4692,
      "sent_at_second": 13
    }
  ];

  test('should renderheader, search bar and order table if there is no order', () => {
    const shallowComponent = shallow(<OrderPage />);
    expect(shallowComponent.find('OrderPageLayout')).toHaveLength(1);
    expect(shallowComponent.find('OrderPageHeader')).toHaveLength(1);
    expect(shallowComponent.find('SearchHeader')).toHaveLength(1);
    expect(shallowComponent.find('OrderCount')).toHaveLength(1);
    expect(shallowComponent.find(SearchBar)).toHaveLength(1);
    expect(shallowComponent.find(OrderTable)).toHaveLength(1);
  });

  test('should render header, search bar and order table when there are orders', () => {
    const shallowComponent = shallow(<OrderPage orders={orders} />);
    expect(shallowComponent.find('OrderPageLayout')).toHaveLength(1);
    expect(shallowComponent.find('OrderPageHeader')).toHaveLength(1);
    expect(shallowComponent.find('SearchHeader')).toHaveLength(1);
    expect(shallowComponent.find('OrderCount')).toHaveLength(1);
    expect(shallowComponent.find(SearchBar)).toHaveLength(1);
    expect(shallowComponent.find(OrderTable)).toHaveLength(1);
  });

  test('should render and update value for search order input', () => {
    const event = {
      target: { value: "88.50" }
    };
    
    const shallowComponent = shallow(<OrderPage orders={orders} />);
    const searchInput = shallowComponent.find(SearchBar);
    expect(searchInput.prop('value')).toEqual('');
    searchInput.simulate('focus');
    searchInput.simulate('change', event);
    shallowComponent.update();
    console.log(shallowComponent.debug());
    expect(shallowComponent.find(SearchBar).prop('value')).toEqual("88.50");
  });
});

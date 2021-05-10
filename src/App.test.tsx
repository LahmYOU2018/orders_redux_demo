/** @format */
import {shallow} from 'enzyme';
import App from './App';

describe('App container', () => {
  const shallowComponent = shallow(<App />);

  test('should render TabPage', () => {
    expect(shallowComponent.find('TabPage')).toHaveLength(1);
  });
});

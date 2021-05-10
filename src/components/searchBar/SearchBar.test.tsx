/** @format */

import {mount, shallow} from 'enzyme';
import {SearchBar} from './SearchBar';

describe('SearchBar', () => {
  const label = 'Search';
  const value = 'Test Value';
  const testId = 'test-id';
  const onChangeSpy = jest.fn();

  const props = {
    label,
    value,
    onChange: onChangeSpy,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render label', () => {
    const shallowComponent = shallow(<SearchBar {...props} />);
    expect(shallowComponent.find('label').text()).toEqual(label);
  });

  test('should not render label', () => {
    const shallowComponent = shallow(<SearchBar {...props} />);
    shallowComponent.setProps({ label: '' });
    expect(shallowComponent.find('label')).toHaveLength(0);
  });

  test('should render input value', () => {
    const shallowComponent = mount(<SearchBar {...props} />);
    expect(shallowComponent.find('input').props().value).toEqual(value);
  });

  test('should render more props', () => {
    const shallowComponent = shallow(<SearchBar data-testId={testId} {...props} />);
    expect(shallowComponent.find(`[data-testId="${testId}"]`)).toHaveLength(1);
  });

  test('should invoke onChange function', () => {
    const mountedComponent = mount(<SearchBar {...props} />);
    const event = {
      target: { value: 'the-value' }
    };

    mountedComponent.find('input').simulate('change', event);
    expect(onChangeSpy).toHaveBeenCalled();
  });
});

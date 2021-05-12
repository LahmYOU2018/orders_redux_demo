/** @format */

import {mount, shallow} from 'enzyme';
import {SearchBar} from './SearchBar';

describe('SearchBar', () => {
  const label = 'Search';
  const value = 'Test Value';
  const testId = 'test-id';
  const placeholder = 'Test placeholder';
  const onChangeSpy = jest.fn();

  const props = {
    label,
    value,
    placeholder,
    onChange: onChangeSpy,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render label', () => {
    const mountedComponent = mount(<SearchBar {...props} />);
    expect(mountedComponent.find('label').text()).toEqual(label);
  });

  test('should not render label', () => {
    const shallowComponent = shallow(<SearchBar {...props} />);
    shallowComponent.setProps({ label: '' });
    expect(shallowComponent.find('label')).toHaveLength(0);
  });

  test('should render placeholder', () => {
    const mountedComponent = mount(<SearchBar {...props} />);
    expect(mountedComponent.find('input').props().placeholder).toEqual(placeholder);
  });

  test('should not render placeholder', () => {
    const mountedComponent = mount(<SearchBar {...props} />);
    const updatedPlaceholder = 'updated placeholder';
    mountedComponent.setProps({ placeholder: updatedPlaceholder });
    expect(mountedComponent.find('input').props().placeholder).toEqual(updatedPlaceholder);
  });

  test('should render input value', () => {
    const mountedComponent = mount(<SearchBar {...props} />);
    expect(mountedComponent.find('input').props().value).toEqual(value);
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

import React from 'react';
import { shallow } from 'enzyme';
import Todos from '../Todos';

/* eslint-disable */
describe('<Todos />', () => {
  const wrapper = shallow(<Todos />);
  const mockEvent = {
    target: {
      getAttribute() {
        return 'SHOW_ACTIVE';
      }
    }
  };

  it('should render div wrapper with class todos', () => {
    expect(wrapper.find('div.todos').length).toBe(1);
  });

  it('should render h1 wrapper with class app-title', () => {
    expect(wrapper.find('h1.app-title').length).toBe(1);
  });

  it('should have a Filter component with a working select method', () => {
    expect(wrapper.state().visibilityFilter).toBe('SHOW_ALL');
    const select = wrapper.find('Filter').prop('select');
    expect(select).toBeInstanceOf(Function);
    select(mockEvent);
    expect(wrapper.state().visibilityFilter).toBe('SHOW_ACTIVE');
  });

  it('should have a Filter component with a working select method', () => {
    expect(wrapper.state().todos[0].completed).toBe(false);
    const toggle = wrapper.find('List').prop('toggle');
    expect(toggle).toBeInstanceOf(Function);
    toggle('1jd912k');
    expect(wrapper.state().todos[0].completed).toBe(true);
  });
});
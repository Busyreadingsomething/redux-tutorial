import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../AddTodo';

/* eslint-disable */
describe('<AddTodo />', () => {
  const wrapper = shallow(<AddTodo />);
  const mockEvent = {
    target: {
      value: 'TESTING',
      getAttribute() {
        return 'text';
      },
    },
  };

  it('should render div wrapper with class add-todo-container', () => {
    expect(wrapper.find('div.add-todo-container').length).toBe(1);
  });

  it('should have Input components rendered', () => {
    expect(wrapper.find('Input').exists()).toBe(true);
  });

  it('should have Input with the a working change prop calling the hangleChange', () => {
    expect(wrapper.state().text).toBe('');
    const change = wrapper.find('Input').first().prop('change');
    expect(change).toBeInstanceOf(Function);
    change(mockEvent);
    expect(wrapper.state().text).toBe('TESTING');
  });
});
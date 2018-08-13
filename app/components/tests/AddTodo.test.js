import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../AddTodo';

/* eslint-disable */
describe('<AddTodo />', () => {
  it('should render div wrapper with class add-todo-container', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.find('div.add-todo-container').length).toBe(1);
  });
});
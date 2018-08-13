import React from 'react';
import { shallow } from 'enzyme';
import Todos from '../Todos';

/* eslint-disable */
describe('<Todos />', () => {
  it('should render div wrapper with class todos', () => {
    const wrapper = shallow(<Todos />);
    expect(wrapper.find('div.todos').length).toBe(1);
  });
});
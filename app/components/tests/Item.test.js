import React from 'react';
import { shallow } from 'enzyme';
import Item from '../Item';

/* eslint-disable */
describe('<Item />', () => {
  const todo = {
    id: '1jd912k',
    text: 'Add a new component',
    date: 'Jan 5, 2018',
    difficulty: 'Medium',
    notes: 'notes',
    completed: false,
  };
  const wrapper = shallow(<Item todo={todo} toggle={() => {}} />);

  it('should render div wrapper with class item', () => {
    expect(wrapper.find('div.item').length).toBe(1);
  });
});
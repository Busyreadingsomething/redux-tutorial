import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter';

/* eslint-disable */
describe('<Filter />', () => {
  const wrapper = shallow(<Filter select={() => {}}/>);

  it('should render div wrapper with class filter-container', () => {
    expect(wrapper.find('div.filter-container').length).toBe(1);
  });
});
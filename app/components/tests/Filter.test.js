import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter';

/* eslint-disable */
describe('<Filter />', () => {
  const mock = jest.fn();
  const wrapper = shallow(<Filter select={mock}/>);

  it('should render div wrapper with class filter-container', () => {
    expect(wrapper.find('div.filter-container').length).toBe(1);
  });

  it('should have three instance of button with filter-button class', () => {
    expect(wrapper.find('button.filter-button').length).toBe(3);
  });

  it('should have the set data-filter SHOW_ALL', () => {
    expect(wrapper.find('[data-filter="SHOW_ALL"]').length).toBe(1);
  });

  it('should have the set data-filter SHOW_COMPLETED', () => {
    expect(wrapper.find('[data-filter="SHOW_COMPLETED"]').length).toBe(1);
  });

  it('should have the set data-filter SHOW_ACTIVE', () => {
    expect(wrapper.find('[data-filter="SHOW_ACTIVE"]').length).toBe(1);
  });

  it('should have each button call the same method', () => {
    wrapper.find('[data-filter="SHOW_ALL"]').simulate('click');
    expect(mock.mock.calls.length).toBe(1);
    wrapper.find('[data-filter="SHOW_COMPLETED"]').simulate('click');
    expect(mock.mock.calls.length).toBe(2);
    wrapper.find('[data-filter="SHOW_ACTIVE"]').simulate('click');
    expect(mock.mock.calls.length).toBe(3);
  })
});
import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';
import data from '../../dummyData';

/* eslint-disable */
describe('<List />', () => {
  const wrapper = shallow(<List
    todos={data}
    toggle={() => {}}
    filter="SHOW_COMPLETED"
  />);

  it('should render div wrapper with class list', () => {
    expect(wrapper.find('div.list').length).toBe(1);
  });
});
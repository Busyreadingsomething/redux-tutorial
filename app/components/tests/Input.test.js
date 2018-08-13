import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

/* eslint-disable */
describe('<Input />', () => {
  const wrapper = shallow(<Input
    type="test"
    change={() => {}}
    val=""
  />);

  it('should render div wrapper with class inpjut-container', () => {
    expect(wrapper.find('div.input-container').length).toBe(1);
  });
});
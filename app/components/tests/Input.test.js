import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

/* eslint-disable */
describe('<Input />', () => {
  const mock = jest.fn();
  const wrapper = shallow(<Input
    type="test"
    change={mock}
    val=""
  />);

  it('should render div wrapper with class inpjut-container', () => {
    expect(wrapper.find('div.input-container').length).toBe(1);
  });

  it('should container a label tag with the className, label-name', () => {
    expect(wrapper.find('label.label-name').length).toBe(1);
  });

  it('should container an input tag with the className, input', () => {
    expect(wrapper.find('input.input').length).toBe(1);
  });

  it('should call the mock function on any change on the input', () => {
    wrapper.find('input.input').simulate('change');
    expect(mock.mock.calls.length).toBe(1);
  })
});
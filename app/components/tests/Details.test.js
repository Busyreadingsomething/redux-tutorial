import React from 'react';
import { shallow } from 'enzyme';
import Details from '../Details';

/* eslint-disable */
describe('<Details />', () => {
  const wrapper = shallow(<Details
    date="A_DATE"
    difficulty="DIFFICULTY"
    notes="NOTES"
  />);

  it('should render div wrapper with class overlay', () => {
    expect(wrapper.find('div.overlay').length).toBe(1);
  });

  it('should render p tag with class date', () => {
    expect(wrapper.find('p.date').length).toBe(1);
  });

  it('should render p tag with class difficulty', () => {
    expect(wrapper.find('p.difficulty').length).toBe(1);
  });

  it('should render h4 tag with class notes', () => {
    expect(wrapper.find('h4.notes').length).toBe(1);
  });
});

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
});

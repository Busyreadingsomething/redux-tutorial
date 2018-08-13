import React from 'react';
import { shallow } from 'enzyme';
import Item from '../Item';

/* eslint-disable */
describe('<Item />', () => {
  const incomplete = {
    id: '1jd912k',
    text: 'Add a new component',
    date: 'Jan 5, 2018',
    difficulty: 'Medium',
    notes: 'notes',
    completed: false,
  };
  const completed = {
    id: '1jd912k',
    text: 'Add a new component',
    date: 'Jan 5, 2018',
    difficulty: 'Medium',
    notes: 'notes',
    completed: true,
  }
  const mock = jest.fn();
  const incompleteWrapper = shallow(<Item todo={incomplete} toggle={mock} />);
  const completeWrapper = shallow(<Item todo={completed} toggle={mock} />);

  it('should render div wrapper with class item', () => {
    expect(incompleteWrapper.find('div.item').length).toBe(1);
  });

  it('should contain a wrapper with class item-splash', () => {
    expect(incompleteWrapper.find('div.item-splash').length).toBe(1);
  });

  it('should contain a p tag with class item-title if completed is false', () => {
    expect(incompleteWrapper.find('p.item-title').length).toBe(1);
  });

  it('should have a button with class item-toggle, if completed is false', () => {
    expect(incompleteWrapper.find('button.item-toggle').length).toBe(1);
  });

  it('should not render the Details component when focus is false', () => {
    expect(incompleteWrapper.find('Details').length).toBe(0);
  })

  it('should contain a p tag with class item-title and item-completed if completed is true', () => {
    expect(completeWrapper.find('p.item-title.item-completed').length).toBe(1);
  });

  it('should have a button with class item-toggle, if completed is false', () => {
    expect(completeWrapper.find('button.item-toggle.button-completed').length).toBe(1);
  });

  it('should call the toggle function when the button is clicked', () => {
    incompleteWrapper.find('button').simulate('click');
    expect(mock.mock.calls.length).toBe(1);
  });

  it('should have a state with false as default', () => {
    expect(incompleteWrapper.state().focus).toBe(false);
  });

  it('should render the Details when the focus is called', () => {
    expect(incompleteWrapper.state().focus).toBe(false);
    incompleteWrapper.find('div.item-splash').simulate('click');
    expect(incompleteWrapper.state().focus).toBe(true);
    expect(incompleteWrapper.find('Details').length).toBe(1);
  });
});
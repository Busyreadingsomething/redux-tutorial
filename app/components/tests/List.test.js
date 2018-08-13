import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from 'jsdom';
import renderer from 'react-test-renderer';
import List, { filtering } from '../List';
import data from '../../dummyData/testData';

/* eslint-disable */
describe('<List />', () => {
  const mock = jest.fn();
  const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
  const { window } = jsdom;
  global.window = window;
  global.document = window.document;

  const wrapper = mount(<List
    todos={data}
    toggle={mock}
    filter="SHOW_COMPLETED"
  />);

  it('renders correctly', () => {
    const snap = renderer
      .create(wrapper)
      .toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('should render div wrapper with class list', () => {
    expect(wrapper.find('div.list').length).toBe(1);
  });

  it('should render a p tag with the class list-title', () => {
    expect(wrapper.find('p.list-title').length).toBe(1);
  });

  it('should render a div with the class list-content', () => {
    expect(wrapper.find('div.list-content').length).toBe(1);
  });

  describe('### FILTERING ###', () => {
    let filtered;

    it('should be a function', () => {
      expect(filtering).toBeInstanceOf(Function);
    });

    it('should return an array', () => {
      filtered = filtering(data, 'SHOW_ALL');
      expect(filtered).toBeInstanceOf(Array);
      expect(filtered.length).toBe(5);
    });

    it('should filter the todos by active', () => {
      filtered = filtering(data, 'SHOW_ACTIVE');
      expect(filtered).toBeInstanceOf(Array);
      expect(filtered.length).toBe(3);
    });

    it('should filter the todos by completed', () => {
      filtered = filtering(data, 'SHOW_COMPLETED');
      expect(filtered).toBeInstanceOf(Array);
      expect(filtered.length).toBe(2);
    });
  });
});
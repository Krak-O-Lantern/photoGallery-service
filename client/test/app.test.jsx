/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../src/app.jsx';

describe('App component', () => {
  const wrapper = shallow(<App />);
  it('should render App component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('A suite example using Snapshot', () => {
    it('renders App component correctly', () => {
      const tree = renderer
        .create(<App />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

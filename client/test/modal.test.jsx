/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../src/modal.jsx';

describe('Modal component', () => {
  const wrapper = shallow(<Modal />);
  it('should render Modal component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

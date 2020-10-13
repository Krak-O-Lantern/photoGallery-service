/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import Photos from '../src/photos.jsx';
import App from '../src/app.jsx';

const imageData = {
  images: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
};

describe('Photos component', () => {
  const wrapper = shallow(<App />);
  it('should render Photos component', () => {
    const photos = wrapper.find(Photos);
    expect(photos.exists()).toBe(true);
  });
  it('should render Photos component', () => {
    const photoWrapper = shallow(<Photos imageData={imageData} />);
    expect(photoWrapper.exists()).toBe(true);

    expect(photoWrapper.find('MainPhotoDiv').length).toBe(1);
  });
});

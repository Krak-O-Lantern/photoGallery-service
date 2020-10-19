/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../src/app.jsx';
import Photos from '../src/photos.jsx';
import Modal from '../src/modal.jsx';

const imgObj = { images: [], descriptions: [] };
const viewableFalse = false;
const viewableTrue = true;
const current = 10;

for (let i = 1; i < 20; i++) {
  imgObj.images.push(`https://fec-pictures.s3-us-west-2.amazonaws.com/image${i}.jpg`);
  imgObj.descriptions.push('"The Greekest Was Here"');
}

// describe('App component', () => {
//   const wrapper = shallow(<App />);
//   it('should render App component', () => {
//     expect(wrapper.exists()).toBe(true);
//   });

//   describe('A suite example using Snapshot', () => {
//     it('renders App component correctly', () => {
//       const tree = renderer
//         .create(<App />)
//         .toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });
// });

describe('A suite of tests for Photos Component', () => {
  it('renders correctly Photos Component', () => {
    const tree = renderer
      .create(<Photos
        imageData={imgObj}
        viewable={viewableTrue}
        setViewable={() => (null)}
        setCurrent={() => (null)}
        current={current}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it does not renders Photo Component', () => {
    const tree = renderer
      .create(<Photos
        imageData={imgObj}
        viewable={viewableFalse}
        setViewable={() => (null)}
        setCurrent={() => (null)}
        current={current}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('A suite of tests for Modal Component', () => {
  it('renders correctly Modal Component', () => {
    const tree = renderer
      .create(<Modal
        imageData={imgObj}
        viewable={viewableTrue}
        setViewable={() => (null)}
        setCurrent={() => (null)}
        current={current}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it does not renders Modal Component', () => {
    const tree = renderer
      .create(<Modal
        imageData={imgObj}
        viewable={viewableFalse}
        setViewable={() => (null)}
        setCurrent={() => (null)}
        current={current}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './photos.jsx';
import Modal from './modal.jsx';

function App() {
  const [imageData, setImageData] = useState({ images: [] });
  const [viewable, setViewable] = useState(false);
  const [current, setCurrent] = useState(10);

  // eslint-disable-next-line camelcase
  function getImages(listingId) {
    axios.get(`/api/images/${listingId}`)
      .then(({ data }) => { setImageData(data); })
      .catch((err) => { console.log('Error getting image data', err); });
  }

  useEffect(() => {
    // this needs to be changede to look at the window.something
    // also to use/test use this in url // http://localhost:3000/?id=1
    // ? escapes? the get sending process? Maybe?
    const lessRandInt = `${window.location.href.match(/id\s*=\s*(.*)/)[1]}`;
    getImages(lessRandInt || 1);
  }, []);

  return (
    <div>
      <Photos
        imageData={imageData}
        viewable={viewable}
        setViewable={setViewable}
        setCurrent={setCurrent}
        current={current}
      />
      <Modal
        imageData={imageData}
        viewable={viewable}
        setViewable={setViewable}
        setCurrent={setCurrent}
        current={current}
      />
    </div>
  );
}

export default App;

import React from 'react';

const Sphere = () =>
  (
    <a-assets>
      <video
        id="big-buck-bunny"
        autoPlay
        loop="true"
        src="assets/video/big_buck_bunny.mp4"
      >
        <track kind="captions" />
      </video>
    </a-assets>
  );

export default Sphere;

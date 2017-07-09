import React from 'react';
import { Entity } from 'aframe-react';

const Camera = () =>
  (
    <Entity
      camera={{
        userHeight: 1.6
      }}
      look-controls
    />
  );

export default Camera;

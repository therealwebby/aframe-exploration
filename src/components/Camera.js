import React from 'react';
import { Entity } from 'aframe-react';
import Cursor from './Cursor';

const Camera = () =>
  (
    <Entity
      camera={{
        userHeight: 1.6
      }}
      look-controls
    >
      <Cursor />
    </Entity>
  );

export default Camera;

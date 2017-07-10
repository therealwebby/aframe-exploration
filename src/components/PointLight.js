import React from 'react';
import { Entity } from 'aframe-react';

const PointLight = () =>
  (
    <Entity
      light={{
        type: 'spot',
        color: '#f0f0f0',
        intensity: '0.5',
        castShadow: true
      }}
      position={{ x: 0, y: 10, z: 0 }}
      rotation={{ x: -47.001, y: 0, z: 0 }}
    />
  );

export default PointLight;

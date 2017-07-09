import React from 'react';
import { Entity } from 'aframe-react';

const Plane = () =>
  (
    <Entity
      geometry={{
        primitive: 'plane',
        height: 50,
        width: 50
      }}
      position={{ x: 0, y: 0, z: 0 }}
      rotation={{ x: -90, y: 0, z: 0 }}
      material={{
        color: '#34495e',
        opacity: 1,
        metalness: 0.6,
        roughness: 0
      }}
      shadow={{
        cast: false,
        receive: true
      }}
    />
  );

export default Plane;

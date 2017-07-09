import React from 'react';
import { Entity } from 'aframe-react';

const Sphere = () =>
  (
    <Entity
      geometry={{ primitive: 'sphere' }}
      position={{ x: 0, y: 1.25, z: -5 }}
      radius="1"
      material={{
        color: '#e0e0e0',
        opacity: 0.8,
        transparent: true,
        metalness: 0.1,
        roughness: 0.7
      }}
    />
  );

export default Sphere;

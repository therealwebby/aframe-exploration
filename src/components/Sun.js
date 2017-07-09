import React from 'react';
import { Entity } from 'aframe-react';

const Sun = () =>
  (
    <Entity
      light={{
        type: 'ambient',
        color: '#fffae8',
        intensity: '0.7'
      }}
    />
  );

export default Sun;

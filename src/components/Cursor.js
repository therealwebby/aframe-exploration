import 'aframe-animation-component';
import React from 'react';
import { Entity } from 'aframe-react';

const Cursor = () =>
  (
    <Entity
      cursor={{
        fuse: true,
        fuseTimeout: 500
      }}
      position={{ x: 0, y: 0, z: -0.9 }}
      geometry={{
        primitive: 'ring',
        radiusInner: 0.01,
        radiusOuter: 0.015
      }}
      material={{
        color: 'white',
        shader: 'flat'
      }}
      animation__click={{
        property: 'scale',
        startEvents: 'click',
        to: '0.1 0.1 0.1',
        from: '1 1 1',
        dur: 500,
        fill: 'backwards',
        easing: 'easeInSine'
      }}
    />
  );

export default Cursor;

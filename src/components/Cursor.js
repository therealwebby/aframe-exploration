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
      geometry={{
        primitive: 'ring',
        radiusInner: 0.02,
        radiusOuter: 0.03
      }}
      material={{
        color: 'black',
        shader: 'flat'
      }}
      animation__click={{
        property: 'scale',
        startEvents: 'click',
        from: '0.1 0.1 0.1',
        to: '1 1 1',
        dur: 150
      }}
    />
  );

export default Cursor;

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
    >
      <a-animation
        attribute="scale"
        dur="500"
        fill="backwards"
        from="1 1 1"
        to="0.2 0.2 0.2"
        begin="click"
        easing="ease-out-cubic"
      />
    </Entity>
  );

export default Cursor;

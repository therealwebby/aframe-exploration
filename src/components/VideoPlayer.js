import React from 'react';
import 'aframe-animation-component';
import { Entity } from 'aframe-react';

const VideoPlayer = () =>
  (
    <Entity
      primitive="a-video"
      src="#big-buck-bunny"
      width="16"
      height="9"
      position={{ x: 0, y: -5, z: -20 }}
      shadow={{
        cast: false,
        receive: true
      }}
      animation={{
        property: 'position',
        dur: 1500,
        loop: false,
        to: { x: 0, y: 7, z: -20 },
        easing: 'easeOutElastic',
        elasticity: 500
      }}
    />
  );

export default VideoPlayer;

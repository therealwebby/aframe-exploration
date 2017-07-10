import 'aframe-animation-component';
import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

class VideoPlayer extends Component {
  componentDidMount() {
    this.props.playVideo();
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      document.getElementById(this.props.videoId).play();
    } else {
      document.getElementById(this.props.videoId).pause();
    }
  }

  render() {
    return (
      <Entity
        primitive="a-video"
        src={`#${this.props.videoId}`}
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
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  videoId: PropTypes.string.isRequired,
  playVideo: PropTypes.func.isRequired
};

export default VideoPlayer;

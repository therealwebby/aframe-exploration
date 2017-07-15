import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

class VideoPlayer extends Component {
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
        position={{ x: 0, y: 7, z: -20 }}
        shadow={{
          cast: false,
          receive: true
        }}
      >
        <a-animation
          attribute="position"
          begin="play"
          dur="1500"
          loop="false"
          from="0 -5 -20"
          to="0 7 -20"
          easing="ease-out-elastic"
          elasticity="500"
        />
      </Entity>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  videoId: PropTypes.string.isRequired
};

export default VideoPlayer;

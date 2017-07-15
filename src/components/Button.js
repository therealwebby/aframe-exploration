import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

class Button extends Component {
  componentDidMount() {
    this.toScale = this.props.isPlayButton ? '1, 1, 1' : '0.75, 0.75, 0.75';
    this.fromScale = this.props.isPlayButton ? '0.75, 0.75, 0.75' : '1, 1, 1';
  }

  componentDidUpdate() {
    if (this.props.isPlayButton) {
      this.toScale = this.props.isPlaying ? '1, 1, 1' : '0.75, 0.75, 0.75';
      this.fromScale = this.props.isPlaying ? '0.75, 0.75, 0.75' : '1, 1, 1';
    } else {
      this.toScale = this.props.isPlaying ? '0.75, 0.75, 0.75' : '1, 1, 1';
      this.fromScale = this.props.isPlaying ? '1, 1, 1' : '0.75, 0.75, 0.75';
    }
  }

  onClick() {
    this.props.action();
  }

  render() {
    return (
      <Entity
        geometry={{ primitive: 'sphere' }}
        position={this.props.position}
        radius="0.5"
        material={{
          color: this.props.color,
          opacity: 1,
          transparent: true,
          metalness: 0.1,
          roughness: 0.7
        }}
        scale={this.toScale}
        shadow={{
          cast: true,
          receive: true
        }}
        events={{
          click: () => this.onClick()
        }}
      >
        <a-animation
          attribute="scale"
          dur="1500"
          begin="click"
          from={this.fromScale}
          to={this.toScale}
          easing="ease-in-sine"
          elasticity="500"
        />
      </Entity>
    );
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number
  }).isRequired,
  color: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isPlayButton: PropTypes.bool.isRequired
};

export default Button;

import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

class Button extends Component {
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
        shadow={{
          cast: true,
          receive: true
        }}
        events={{
          click: () => this.onClick()
        }}
      />
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
  color: PropTypes.string.isRequired
};

export default Button;

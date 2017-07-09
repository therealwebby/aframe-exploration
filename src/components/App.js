import 'aframe';
import { Scene } from 'aframe-react';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Sphere from './Sphere';
import Sun from './Sun';
import PointLight from './PointLight';
import Plane from './Plane';
import Camera from './Camera';
import VideoPlayer from './VideoPlayer';
import Assets from './Assets';

import * as vrPropertyActions from '../actions/vr-properties';

class App extends Component {
  componentDidMount() {
    this.props.disableVR();
  }

  render() {
    return (
      <Scene
        fog={{
          type: 'exponential',
          color: '#AAA',
          density: '0.03'
        }}
      >
        <a-assets>
          <video
            id="big-buck-bunny"
            autoPlay
            loop="true"
            src="assets/video/big_buck_bunny.mp4"
          >
            <track kind="captions" />
          </video>
        </a-assets>

        <Assets />
        <Sphere />
        <Plane />
        <Sun />
        <PointLight />
        <Camera />
        <VideoPlayer />
      </Scene>
    );
  }
}

App.propTypes = {
  disableVR: PropTypes.func.isRequired
};

/**
 * Add each state to props
 * @param {Object} state
 * @returns {{vrProperties: Object}}
 */
function mapStateToProps(state) {
  const { vrProperties } = state;

  return {
    vrProperties
  };
}

/**
 * Add dispatches to the props
 * @param  {function} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(
    {},
    vrPropertyActions
  ), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

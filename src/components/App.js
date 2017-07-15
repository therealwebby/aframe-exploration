import 'aframe';
import { Scene } from 'aframe-react';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Button from './Button';
import Sun from './Sun';
import PointLight from './PointLight';
import Plane from './Plane';
import Camera from './Camera';
import VideoPlayer from './VideoPlayer';
import Sky from './Sky';

import * as vrPropertyActions from '../actions/vr-properties';
import * as videoActions from '../actions/video';

import videoFile from '../assets/video/big_buck_bunny.mp4';

class App extends Component {
  componentDidMount() {
    this.props.disableVR();
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <video
            id="big-buck-bunny"
            autoPlay
            loop="true"
            src={videoFile}
          >
            <track kind="captions" />
          </video>
        </a-assets>
        <Button
          action={this.props.playVideo}
          isPlayButton={true}
          isPlaying={this.props.video.isPlaying}
          position={{ x: -3, y: 1.25, z: -7.5 }}
          color="#1abc9c"
        />
        <Button
          action={this.props.pauseVideo}
          isPlayButton={false}
          isPlaying={this.props.video.isPlaying}
          position={{ x: 3, y: 1.25, z: -7.5 }}
          color="#e67e22"
        />
        <Plane />
        <Sun />
        <PointLight />
        <Camera />
        <VideoPlayer
          isPlaying={this.props.video.isPlaying}
          videoId="big-buck-bunny"
          playVideo={this.props.playVideo}
        />
        <Sky />
      </Scene>
    );
  }
}

App.propTypes = {
  disableVR: PropTypes.func.isRequired,
  video: PropTypes.shape({
    isPlaying: PropTypes.bool.isRequired
  }).isRequired,
  playVideo: PropTypes.func.isRequired,
  pauseVideo: PropTypes.func.isRequired
};

/**
 * Add each state to props
 * @param {Object} state
 * @returns {{vrProperties: Object}}
 */
function mapStateToProps(state) {
  const {
    vrProperties,
    video
  } = state;

  return {
    vrProperties,
    video
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
    vrPropertyActions,
    videoActions
  ), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

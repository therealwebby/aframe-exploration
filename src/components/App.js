import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Sphere from './Sphere';
import Sun from './Sun';
import PointLight from './PointLight';

import * as vrPropertyActions from '../actions/vr-properties';

class App extends Component {
  componentDidMount() {
    this.props.disableVR();
  }

  render() {
    return (
      <Scene>
        <Sphere />
        <Entity
          primitive="a-plane"
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
          shadow={{
            cast: true,
            receive: true
          }}
        />
        <Entity primitive="a-sky" color="#ECECEC" />
        <Sun />
        <PointLight />
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

import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as vrPropertyActions from '../actions/vr-properties';

const App = () => (
  <Scene>
    <Entity primitive="a-sphere" position="0 1.25 -5" radius="1.25" color="#EF2D5E" />
    <Entity
      primitive="a-plane"
      position="0 0 -4"
      rotation="-90 0 0"
      width="4"
      height="4"
      color="#7BC8A4"
    />
    <Entity primitive="a-sky" color="#ECECEC" />
  </Scene>
);

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(
    {},
    vrPropertyActions
  ), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

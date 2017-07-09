import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Sphere from './Sphere';
import Sun from './Sun';
import PointLight from './PointLight';
import Plane from './Plane';

import * as vrPropertyActions from '../actions/vr-properties';

class App extends Component {
  componentDidMount() {
    this.props.disableVR();
  }

  render() {
    return (
      <Scene>
        <Sphere />
        <Plane />
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

import { combineReducers } from 'redux';
import vrProperties from './vr-properties';
import video from './video';

const rootReducer = combineReducers({
  vrProperties,
  video
});

export default rootReducer;

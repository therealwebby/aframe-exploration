import * as vrActions from '../actions/vr-properties';

export default function vrProperties(state = {}, action) {
  switch (action.type) {
    case vrActions.ENABLE_VR:
      return Object.assign({}, state, {
        isInVRMode: true
      });
    case vrActions.DISABLE_VR:
      return Object.assign({}, state, {
        isInVRMode: false
      });
    default: return state;
  }
}

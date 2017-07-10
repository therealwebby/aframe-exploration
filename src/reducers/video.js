import * as videoActions from '../actions/video';

export default function video(state = {}, action) {
  switch (action.type) {
    case videoActions.PLAY_VIDEO:
      return Object.assign({}, state, {
        isPlaying: true
      });
    case videoActions.PAUSE_VIDEO:
      return Object.assign({}, state, {
        isPlaying: false
      });
    default: return state;
  }
}

export const PLAY_VIDEO = 'PLAY_VIDEO';
export const PAUSE_VIDEO = 'PAUSE_VIDEO';

/**
 * Action to switch into VR mode
 * @return {Object}
 */
export function playVideo() {
  return {
    type: PLAY_VIDEO
  };
}

export function pauseVideo() {
  return {
    type: PAUSE_VIDEO
  };
}

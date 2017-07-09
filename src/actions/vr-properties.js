export const ENABLE_VR = 'ENABLE_VR';
export const DISABLE_VR = 'DISABLE_VR';

/**
 * Action to switch into VR mode
 * @return {Object}
 */
export function enableVR() {
  return {
    type: ENABLE_VR
  };
}

export function disableVR() {
  return {
    type: DISABLE_VR
  };
}

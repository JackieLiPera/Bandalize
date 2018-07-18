import * as ApiTrackingUtil from '../util/tracking_api_util';
export const RECEIVE_TRACKING = "RECEIEVE_TRACKING";
export const REMOVE_TRACKING = "REMOVE_TRACKING";


export const receiveTracking = (tracking) => ({
  type: RECEIVE_TRACKING,
  tracking
});

export const removeTracking = (trackingId) => ({
  type: REMOVE_TRACKING,
  trackingId
});


export const createTracking = (userId, artistId) => dispatch => (
  ApiTrackingUtil.createTracking(userId, artistId).then((tracking) => dispatch(receiveTracking(tracking)))
);

export const deleteTracking = (userId, artistId) => dispatch => (
  ApiTrackingUtil.deleteTracking(userId, artistId).then((tracking) => dispatch(removeTracking(tracking.id)))
);

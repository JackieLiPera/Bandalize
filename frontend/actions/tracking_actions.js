import * as ApiTrackingUtil from '../util/tracking_api_util';
export const RECEIVE_TRACKING = "RECEIVE_TRACKING";
export const REMOVE_TRACKING = "REMOVE_TRACKING";


export const receiveTracking = (tracking) => ({
  type: RECEIVE_TRACKING,
  tracking
});

export const removeTracking = (trackingId) => {
  return {
    type: REMOVE_TRACKING,
    trackingId
  }
};


export const createTracking = (userId, artistId) => dispatch => (
  ApiTrackingUtil.createTracking(userId, artistId).then((tracking) => dispatch(receiveTracking(tracking)))
);

export const deleteTracking = (trackingId, artistId) => dispatch => {
  return ApiTrackingUtil.deleteTracking(trackingId, artistId).then((trackingId) =>  {
    dispatch(removeTracking(trackingId));
  });
};

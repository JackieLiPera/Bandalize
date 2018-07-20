import * as ApiRsvpUtil from '../util/rsvp_api_util';
export const RECEIVE_RSVP = "RECEIVE_RSVP";
export const REMOVE_RSVP = "REMOVE_RSVP";


export const receiveRsvp = (rsvp) => {
  return {
    type: RECEIVE_RSVP,
    rsvp
  }
};

export const removeRsvp = (rsvpId) => ({
  type: REMOVE_RSVP,
  rsvpId
});


export const createRsvp = (userId, eventId) => dispatch => (
  ApiRsvpUtil.createRsvp(userId, eventId).then((rsvp) => dispatch(receiveRsvp(rsvp)))
);

export const deleteRsvp = (userId, eventId) => dispatch => (
  ApiRsvpUtil.deleteRsvp(userId, eventId).then((eventId) => dispatch(removeRsvp(eventId)))
);

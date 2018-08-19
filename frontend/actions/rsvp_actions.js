import * as ApiRsvpUtil from '../util/rsvp_api_util';
export const RECEIVE_RSVP = "RECEIVE_RSVP";
export const REMOVE_RSVP = "REMOVE_RSVP";


export const receiveRsvp = (rsvp) => {
  return {
    type: RECEIVE_RSVP,
    rsvp
  }
};

export const removeRsvp = (rsvp) => {
  return {
    type: REMOVE_RSVP,
    rsvpId: rsvp.id,
    eventId: rsvp.event_id,
    userId: rsvp.user_id
  }
};


export const createRsvp = (userId, eventId) => dispatch => (
  ApiRsvpUtil.createRsvp(userId, eventId).then((rsvp) => dispatch(receiveRsvp(rsvp)))
);

export const deleteRsvp = (rsvpId, eventId) => dispatch => (
  ApiRsvpUtil.deleteRsvp(rsvpId, eventId).then((rsvp) => dispatch(removeRsvp(rsvp)))
);

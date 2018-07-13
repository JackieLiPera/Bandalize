import * as ApiEventsUtil from '../util/events_api_util';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';


export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});


export const fetchEvents = () => dispatch => (
  ApiEventsUtil.fetchEvents().then((events) => dispatch(receiveEvents(events)))
);

export const fetchEvent = (id) => dispatch => (
  ApiEventsUtil.fetchEvent(id).then((event) => dispatch(receiveEvent(event)))
);

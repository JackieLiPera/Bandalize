json.extract! currentUser, :id, :email
json.rsvp_events currentUser.rsvp_event_ids

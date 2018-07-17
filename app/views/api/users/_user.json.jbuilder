json.extract! currentUser, :id, :email
json.rsvp_events currentUser.rsvp_event_ids
json.tracked_artists currentUser.tracked_artist_ids

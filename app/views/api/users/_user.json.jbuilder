json.extract! currentUser, :id, :email, :firstname, :lastname
json.rsvp_events currentUser.rsvp_event_ids.sort
json.tracked_artists currentUser.tracked_artist_ids.sort

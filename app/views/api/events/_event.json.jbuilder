json.extract! event, :id, :event_on, :artist_id, :venue_id, :rsvps
json.rsvps event.rsvp_ids.sort
# json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")

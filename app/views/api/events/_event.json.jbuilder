json.extract! event, :id, :event_on, :artist_id, :venue_id
json.event_rsvps event.rsvps
# json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")

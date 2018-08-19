json.extract! venue, :id, :name, :address, :city, :state, :country, :latitude, :longitude
json.venue_events venue.event_ids

json.artist do
  json.partial! '/api/events/event', event: @event
end

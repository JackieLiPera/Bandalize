class Event < ApplicationRecord
  validates :event_on, :artist_id, :venue_id, presence: true

  belongs_to :artist
  belongs_to :venue
  has_many :rsvps
  has_many :comments
end

class Venue < ApplicationRecord
  validates :name, :address, :city, :state, :country, :latitude, :longitude, presence: true

  has_many :events
  has_many :artists, through: :events, source: :artist
end

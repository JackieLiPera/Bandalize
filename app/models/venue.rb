class Venue < ApplicationRecord
  include PgSearch
  multisearchable :against => [:name, :city]
  validates :name, :address, :city, :state, :country, :latitude, :longitude, presence: true

  has_many :events
  has_many :artists, through: :events, source: :artist
end

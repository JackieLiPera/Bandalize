class TrackedArtist < ApplicationRecord
  validates :user_id, :artist_id, presence: true

  belongs_to :user
  has_one :artist
end

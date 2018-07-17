class Tracking < ApplicationRecord
  validates :user_id, :artist_id, presence: true

  belongs_to :user
  belongs_to :artist
end

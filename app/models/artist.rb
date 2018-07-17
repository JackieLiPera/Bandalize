class Artist < ApplicationRecord
  validates :name, :image_url, :genre, presence: true
  validates :on_tour, inclusion: { in: [true, false] }

  has_many :events
  has_many :venues, through: :events, source: :venue
  has_many :trackers
  has_one_attached :photo
end

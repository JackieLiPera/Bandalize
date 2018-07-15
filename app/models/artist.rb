class Artist < ApplicationRecord
  validates :name, :image_url, :genre, presence: true
  validates :on_tour, inclusion: { in: [true, false] }

  has_many :events
  has_many :trackers
end

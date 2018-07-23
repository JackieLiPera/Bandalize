class Artist < ApplicationRecord
  validates :name, :genre, presence: true
  validates :on_tour, inclusion: { in: [true, false] }

  has_many :events
  has_many :venues, through: :events, source: :venue
  has_many :trackings
  has_many :trackers, through: :trackings, source: :user
  has_one_attached :photo
end

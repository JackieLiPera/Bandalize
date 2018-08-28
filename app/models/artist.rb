class Artist < ApplicationRecord
  include PgSearch
  multisearchable :against => :name, :using => [:tsearch, :trigram]
  validates :name, :genre, presence: true
  validates :on_tour, inclusion: { in: [true, false] }

  has_many :events
  has_many :venues, through: :events, source: :venue
  has_many :trackings, dependent: :destroy
  has_many :trackers, through: :trackings, source: :user
  has_many :comments, dependent: :destroy
  has_many :rsvps, through: :events, source: :rsvps
  has_one_attached :photo
end

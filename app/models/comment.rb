class Comment < ApplicationRecord
  validates :body, :artist_id, :user_id, presence: true

  belongs_to :user
  belongs_to :artist
end

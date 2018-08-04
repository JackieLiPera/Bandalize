class Comment < ApplicationRecord
  validates :body, :event_id, :user_id, presence: true

  belongs_to :user
  belongs_to :event
  has_one_attached :photo
end

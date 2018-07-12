class Artist < ApplicationRecord
  validates :name, :image_url, :on_tour, :genre, presence: true

  
end

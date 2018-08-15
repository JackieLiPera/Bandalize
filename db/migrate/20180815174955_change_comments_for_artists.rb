class ChangeCommentsForArtists < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :event_id, :artist_id
  end
end

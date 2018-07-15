class CreateTrackedArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :tracked_artists do |t|
      t.integer :user_id, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end
  end
end

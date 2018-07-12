class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.datetime :event_on, null: false
      t.integer :venue_id, null: false
      t.integer :artist_id, null: false
      t.string :name

      t.timestamps
    end
  end
end

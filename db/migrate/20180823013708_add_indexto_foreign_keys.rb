class AddIndextoForeignKeys < ActiveRecord::Migration[5.2]
  def change
    add_index :trackings, :user_id
    add_index :trackings, :artist_id
    add_index :rsvps, :user_id
    add_index :rsvps, :event_id
    add_index :comments, :user_id
    add_index :comments, :artist_id
    remove_index :users, :email
    remove_index :artists, :name
  end
end

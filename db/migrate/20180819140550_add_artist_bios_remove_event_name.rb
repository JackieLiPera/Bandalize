class AddArtistBiosRemoveEventName < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :bio, :text
    remove_column :events, :name
  end
end

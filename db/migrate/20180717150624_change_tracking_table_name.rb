class ChangeTrackingTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :tracked_artists, :trackings
  end
end

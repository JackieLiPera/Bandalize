class RemoveRsvpTimeStamps < ActiveRecord::Migration[5.2]
  def change
    remove_column :rsvps, :created_at
    remove_column :rsvps, :updated_at
  end
end

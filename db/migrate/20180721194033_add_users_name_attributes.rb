class AddUsersNameAttributes < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    remove_column :artists, :image_url
  end
end

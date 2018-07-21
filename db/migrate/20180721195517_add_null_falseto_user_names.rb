class AddNullFalsetoUserNames < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :firstname, :string, null: false
    change_column :users, :lastname, :string, null: false
  end
end

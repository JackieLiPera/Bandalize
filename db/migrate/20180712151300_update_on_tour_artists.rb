class UpdateOnTourArtists < ActiveRecord::Migration[5.2]
  def change
    change_column_null :artists, :on_tour, true
    change_column_default :artists, :on_tour, false
  end
end

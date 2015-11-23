class AddIndexToLocationId < ActiveRecord::Migration
  def change
    add_index :posts, :location_id
  end
end

class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :place, null: false
      t.timestamps
    end
    add_index :locations, :place, unique: true
  end
end

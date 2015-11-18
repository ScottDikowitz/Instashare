class DropImage < ActiveRecord::Migration
  def change
    remove_column :posts, :image
  end
end

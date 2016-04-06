class AddPostImageMetaToPosts < ActiveRecord::Migration
  def change
      add_column :posts, :image_meta, :text
  end
end

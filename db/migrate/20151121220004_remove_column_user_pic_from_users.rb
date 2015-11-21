class RemoveColumnUserPicFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :user_pic
  end
end

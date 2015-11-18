class AddColumnProfilePicToUsers < ActiveRecord::Migration
  def change
    add_column :users, :user_pic, :string 
  end
end

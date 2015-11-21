class AddAttachmentsToUsers < ActiveRecord::Migration
  def change
    add_attachment :users, :user_pic
  end
end
